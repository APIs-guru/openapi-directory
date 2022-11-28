var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// KeyRange
/**
 * KeyRange represents a range of rows in a table or index. A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here. For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: "Bob", "2014-09-23" Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `"Bob"` that occurred in the year 2015: "start_closed": ["Bob", "2015-01-01"] "end_closed": ["Bob", "2015-12-31"] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `"Bob"` that occurred during and after the year 2000: "start_closed": ["Bob", "2000-01-01"] "end_closed": ["Bob"] The next example retrieves all events for `"Bob"`: "start_closed": ["Bob"] "end_closed": ["Bob"] To retrieve events before the year 2000: "start_closed": ["Bob"] "end_open": ["Bob", "2000-01-01"] The following range includes all rows in the table: "start_closed": [] "end_closed": [] This range returns all users whose `UserName` begins with any character from A to C: "start_closed": ["A"] "end_open": ["D"] This range returns all users whose `UserName` begins with B: "start_closed": ["B"] "end_open": ["C"] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: "start_closed": ["100"] "end_closed": ["1"] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema.
**/
var KeyRange = /** @class */ (function (_super) {
    __extends(KeyRange, _super);
    function KeyRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endClosed" }),
        __metadata("design:type", Array)
    ], KeyRange.prototype, "endClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endOpen" }),
        __metadata("design:type", Array)
    ], KeyRange.prototype, "endOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startClosed" }),
        __metadata("design:type", Array)
    ], KeyRange.prototype, "startClosed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startOpen" }),
        __metadata("design:type", Array)
    ], KeyRange.prototype, "startOpen", void 0);
    return KeyRange;
}(SpeakeasyBase));
export { KeyRange };

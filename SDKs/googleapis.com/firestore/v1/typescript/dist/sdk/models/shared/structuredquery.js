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
import { Cursor } from "./cursor";
import { CollectionSelector } from "./collectionselector";
import { Order } from "./order";
import { Projection } from "./projection";
import { Filter } from "./filter";
// StructuredQuery
/**
 * A Firestore query.
**/
var StructuredQuery = /** @class */ (function (_super) {
    __extends(StructuredQuery, _super);
    function StructuredQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endAt" }),
        __metadata("design:type", Cursor)
    ], StructuredQuery.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from", elemType: CollectionSelector }),
        __metadata("design:type", Array)
    ], StructuredQuery.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], StructuredQuery.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], StructuredQuery.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy", elemType: Order }),
        __metadata("design:type", Array)
    ], StructuredQuery.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", Projection)
    ], StructuredQuery.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startAt" }),
        __metadata("design:type", Cursor)
    ], StructuredQuery.prototype, "startAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=where" }),
        __metadata("design:type", Filter)
    ], StructuredQuery.prototype, "where", void 0);
    return StructuredQuery;
}(SpeakeasyBase));
export { StructuredQuery };

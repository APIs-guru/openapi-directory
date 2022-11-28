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
import { TableCellLocation } from "./tablecelllocation";
// TableRange
/**
 * A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
**/
var TableRange = /** @class */ (function (_super) {
    __extends(TableRange, _super);
    function TableRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnSpan" }),
        __metadata("design:type", Number)
    ], TableRange.prototype, "columnSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", TableCellLocation)
    ], TableRange.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowSpan" }),
        __metadata("design:type", Number)
    ], TableRange.prototype, "rowSpan", void 0);
    return TableRange;
}(SpeakeasyBase));
export { TableRange };

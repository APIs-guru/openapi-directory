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
import { SuggestedTableRowStyle } from "./suggestedtablerowstyle";
import { TableCell } from "./tablecell";
import { TableRowStyle } from "./tablerowstyle";
// TableRow
/**
 * The contents and style of a row in a Table.
**/
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endIndex" }),
        __metadata("design:type", Number)
    ], TableRow.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], TableRow.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" }),
        __metadata("design:type", Array)
    ], TableRow.prototype, "suggestedDeletionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" }),
        __metadata("design:type", Array)
    ], TableRow.prototype, "suggestedInsertionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedTableRowStyleChanges", elemType: SuggestedTableRowStyle }),
        __metadata("design:type", Map)
    ], TableRow.prototype, "suggestedTableRowStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableCells", elemType: TableCell }),
        __metadata("design:type", Array)
    ], TableRow.prototype, "tableCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableRowStyle" }),
        __metadata("design:type", TableRowStyle)
    ], TableRow.prototype, "tableRowStyle", void 0);
    return TableRow;
}(SpeakeasyBase));
export { TableRow };

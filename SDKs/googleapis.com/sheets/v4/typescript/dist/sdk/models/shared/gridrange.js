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
// GridRange
/**
 * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
**/
var GridRange = /** @class */ (function (_super) {
    __extends(GridRange, _super);
    function GridRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endColumnIndex" }),
        __metadata("design:type", Number)
    ], GridRange.prototype, "endColumnIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endRowIndex" }),
        __metadata("design:type", Number)
    ], GridRange.prototype, "endRowIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheetId" }),
        __metadata("design:type", Number)
    ], GridRange.prototype, "sheetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startColumnIndex" }),
        __metadata("design:type", Number)
    ], GridRange.prototype, "startColumnIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startRowIndex" }),
        __metadata("design:type", Number)
    ], GridRange.prototype, "startRowIndex", void 0);
    return GridRange;
}(SpeakeasyBase));
export { GridRange };

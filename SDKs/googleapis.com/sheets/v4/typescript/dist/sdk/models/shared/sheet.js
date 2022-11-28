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
import { BandedRange } from "./bandedrange";
import { BasicFilter } from "./basicfilter";
import { EmbeddedChart } from "./embeddedchart";
import { DimensionGroup } from "./dimensiongroup";
import { ConditionalFormatRule } from "./conditionalformatrule";
import { GridData } from "./griddata";
import { DeveloperMetadata } from "./developermetadata";
import { FilterView } from "./filterview";
import { GridRange } from "./gridrange";
import { SheetProperties } from "./sheetproperties";
import { ProtectedRange } from "./protectedrange";
import { Slicer } from "./slicer";
// Sheet
/**
 * A sheet in a spreadsheet.
**/
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandedRanges", elemType: BandedRange }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "bandedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicFilter" }),
        __metadata("design:type", BasicFilter)
    ], Sheet.prototype, "basicFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=charts", elemType: EmbeddedChart }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "charts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnGroups", elemType: DimensionGroup }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "columnGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionalFormats", elemType: ConditionalFormatRule }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "conditionalFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GridData }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerMetadata", elemType: DeveloperMetadata }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "developerMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterViews", elemType: FilterView }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "filterViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merges", elemType: GridRange }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "merges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", SheetProperties)
    ], Sheet.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectedRanges", elemType: ProtectedRange }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "protectedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowGroups", elemType: DimensionGroup }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "rowGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slicers", elemType: Slicer }),
        __metadata("design:type", Array)
    ], Sheet.prototype, "slicers", void 0);
    return Sheet;
}(SpeakeasyBase));
export { Sheet };

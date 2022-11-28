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
import { DimensionRange } from "./dimensionrange";
export var DeveloperMetadataLocationLocationTypeEnum;
(function (DeveloperMetadataLocationLocationTypeEnum) {
    DeveloperMetadataLocationLocationTypeEnum["DeveloperMetadataLocationTypeUnspecified"] = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED";
    DeveloperMetadataLocationLocationTypeEnum["Row"] = "ROW";
    DeveloperMetadataLocationLocationTypeEnum["Column"] = "COLUMN";
    DeveloperMetadataLocationLocationTypeEnum["Sheet"] = "SHEET";
    DeveloperMetadataLocationLocationTypeEnum["Spreadsheet"] = "SPREADSHEET";
})(DeveloperMetadataLocationLocationTypeEnum || (DeveloperMetadataLocationLocationTypeEnum = {}));
// DeveloperMetadataLocation
/**
 * A location where metadata may be associated in a spreadsheet.
**/
var DeveloperMetadataLocation = /** @class */ (function (_super) {
    __extends(DeveloperMetadataLocation, _super);
    function DeveloperMetadataLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionRange" }),
        __metadata("design:type", DimensionRange)
    ], DeveloperMetadataLocation.prototype, "dimensionRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], DeveloperMetadataLocation.prototype, "locationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheetId" }),
        __metadata("design:type", Number)
    ], DeveloperMetadataLocation.prototype, "sheetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spreadsheet" }),
        __metadata("design:type", Boolean)
    ], DeveloperMetadataLocation.prototype, "spreadsheet", void 0);
    return DeveloperMetadataLocation;
}(SpeakeasyBase));
export { DeveloperMetadataLocation };

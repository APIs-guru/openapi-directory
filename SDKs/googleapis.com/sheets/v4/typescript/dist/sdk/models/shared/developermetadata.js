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
import { DeveloperMetadataLocation } from "./developermetadatalocation";
export var DeveloperMetadataVisibilityEnum;
(function (DeveloperMetadataVisibilityEnum) {
    DeveloperMetadataVisibilityEnum["DeveloperMetadataVisibilityUnspecified"] = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED";
    DeveloperMetadataVisibilityEnum["Document"] = "DOCUMENT";
    DeveloperMetadataVisibilityEnum["Project"] = "PROJECT";
})(DeveloperMetadataVisibilityEnum || (DeveloperMetadataVisibilityEnum = {}));
// DeveloperMetadata
/**
 * Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
**/
var DeveloperMetadata = /** @class */ (function (_super) {
    __extends(DeveloperMetadata, _super);
    function DeveloperMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", DeveloperMetadataLocation)
    ], DeveloperMetadata.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataId" }),
        __metadata("design:type", Number)
    ], DeveloperMetadata.prototype, "metadataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataKey" }),
        __metadata("design:type", String)
    ], DeveloperMetadata.prototype, "metadataKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataValue" }),
        __metadata("design:type", String)
    ], DeveloperMetadata.prototype, "metadataValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], DeveloperMetadata.prototype, "visibility", void 0);
    return DeveloperMetadata;
}(SpeakeasyBase));
export { DeveloperMetadata };

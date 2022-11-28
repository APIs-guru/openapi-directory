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
export var DeveloperMetadataLookupLocationMatchingStrategyEnum;
(function (DeveloperMetadataLookupLocationMatchingStrategyEnum) {
    DeveloperMetadataLookupLocationMatchingStrategyEnum["DeveloperMetadataLocationMatchingStrategyUnspecified"] = "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED";
    DeveloperMetadataLookupLocationMatchingStrategyEnum["ExactLocation"] = "EXACT_LOCATION";
    DeveloperMetadataLookupLocationMatchingStrategyEnum["IntersectingLocation"] = "INTERSECTING_LOCATION";
})(DeveloperMetadataLookupLocationMatchingStrategyEnum || (DeveloperMetadataLookupLocationMatchingStrategyEnum = {}));
export var DeveloperMetadataLookupLocationTypeEnum;
(function (DeveloperMetadataLookupLocationTypeEnum) {
    DeveloperMetadataLookupLocationTypeEnum["DeveloperMetadataLocationTypeUnspecified"] = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED";
    DeveloperMetadataLookupLocationTypeEnum["Row"] = "ROW";
    DeveloperMetadataLookupLocationTypeEnum["Column"] = "COLUMN";
    DeveloperMetadataLookupLocationTypeEnum["Sheet"] = "SHEET";
    DeveloperMetadataLookupLocationTypeEnum["Spreadsheet"] = "SPREADSHEET";
})(DeveloperMetadataLookupLocationTypeEnum || (DeveloperMetadataLookupLocationTypeEnum = {}));
export var DeveloperMetadataLookupVisibilityEnum;
(function (DeveloperMetadataLookupVisibilityEnum) {
    DeveloperMetadataLookupVisibilityEnum["DeveloperMetadataVisibilityUnspecified"] = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED";
    DeveloperMetadataLookupVisibilityEnum["Document"] = "DOCUMENT";
    DeveloperMetadataLookupVisibilityEnum["Project"] = "PROJECT";
})(DeveloperMetadataLookupVisibilityEnum || (DeveloperMetadataLookupVisibilityEnum = {}));
// DeveloperMetadataLookup
/**
 * Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
**/
var DeveloperMetadataLookup = /** @class */ (function (_super) {
    __extends(DeveloperMetadataLookup, _super);
    function DeveloperMetadataLookup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationMatchingStrategy" }),
        __metadata("design:type", String)
    ], DeveloperMetadataLookup.prototype, "locationMatchingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationType" }),
        __metadata("design:type", String)
    ], DeveloperMetadataLookup.prototype, "locationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataId" }),
        __metadata("design:type", Number)
    ], DeveloperMetadataLookup.prototype, "metadataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataKey" }),
        __metadata("design:type", String)
    ], DeveloperMetadataLookup.prototype, "metadataKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataLocation" }),
        __metadata("design:type", DeveloperMetadataLocation)
    ], DeveloperMetadataLookup.prototype, "metadataLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataValue" }),
        __metadata("design:type", String)
    ], DeveloperMetadataLookup.prototype, "metadataValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], DeveloperMetadataLookup.prototype, "visibility", void 0);
    return DeveloperMetadataLookup;
}(SpeakeasyBase));
export { DeveloperMetadataLookup };

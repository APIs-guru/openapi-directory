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
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { CategoryInput } from "./category";
import { PostalAddress } from "./postaladdress";
import { Attribute } from "./attribute";
import { LatLng } from "./latlng";
import { LocationKey } from "./locationkey";
import { LocationStateInput } from "./locationstate";
import { Metadata } from "./metadata";
import { MoreHours } from "./morehours";
import { OpenInfo } from "./openinfo";
import { PriceList } from "./pricelist";
import { Profile } from "./profile";
import { BusinessHours } from "./businesshours";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { SpecialHours } from "./specialhours";
import { Category } from "./category";
import { LocationState } from "./locationstate";
// LocationInput
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
var LocationInput = /** @class */ (function (_super) {
    __extends(LocationInput, _super);
    function LocationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adWordsLocationExtensions" }),
        __metadata("design:type", AdWordsLocationExtensions)
    ], LocationInput.prototype, "adWordsLocationExtensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalCategories", elemType: CategoryInput }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "additionalCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalPhones" }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "additionalPhones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PostalAddress)
    ], LocationInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latlng" }),
        __metadata("design:type", LatLng)
    ], LocationInput.prototype, "latlng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationKey" }),
        __metadata("design:type", LocationKey)
    ], LocationInput.prototype, "locationKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationName" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "locationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationState" }),
        __metadata("design:type", LocationStateInput)
    ], LocationInput.prototype, "locationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Metadata)
    ], LocationInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "moreHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openInfo" }),
        __metadata("design:type", OpenInfo)
    ], LocationInput.prototype, "openInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceLists", elemType: PriceList }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "priceLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryCategory" }),
        __metadata("design:type", CategoryInput)
    ], LocationInput.prototype, "primaryCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPhone" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "primaryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", Profile)
    ], LocationInput.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regularHours" }),
        __metadata("design:type", BusinessHours)
    ], LocationInput.prototype, "regularHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationshipData" }),
        __metadata("design:type", RelationshipData)
    ], LocationInput.prototype, "relationshipData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceArea" }),
        __metadata("design:type", ServiceAreaBusiness)
    ], LocationInput.prototype, "serviceArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialHours" }),
        __metadata("design:type", SpecialHours)
    ], LocationInput.prototype, "specialHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCode" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "storeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "websiteUrl", void 0);
    return LocationInput;
}(SpeakeasyBase));
export { LocationInput };
// Location
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adWordsLocationExtensions" }),
        __metadata("design:type", AdWordsLocationExtensions)
    ], Location.prototype, "adWordsLocationExtensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalCategories", elemType: Category }),
        __metadata("design:type", Array)
    ], Location.prototype, "additionalCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalPhones" }),
        __metadata("design:type", Array)
    ], Location.prototype, "additionalPhones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PostalAddress)
    ], Location.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute }),
        __metadata("design:type", Array)
    ], Location.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], Location.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], Location.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latlng" }),
        __metadata("design:type", LatLng)
    ], Location.prototype, "latlng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationKey" }),
        __metadata("design:type", LocationKey)
    ], Location.prototype, "locationKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationName" }),
        __metadata("design:type", String)
    ], Location.prototype, "locationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationState" }),
        __metadata("design:type", LocationState)
    ], Location.prototype, "locationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Metadata)
    ], Location.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours }),
        __metadata("design:type", Array)
    ], Location.prototype, "moreHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Location.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openInfo" }),
        __metadata("design:type", OpenInfo)
    ], Location.prototype, "openInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceLists", elemType: PriceList }),
        __metadata("design:type", Array)
    ], Location.prototype, "priceLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryCategory" }),
        __metadata("design:type", Category)
    ], Location.prototype, "primaryCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryPhone" }),
        __metadata("design:type", String)
    ], Location.prototype, "primaryPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", Profile)
    ], Location.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regularHours" }),
        __metadata("design:type", BusinessHours)
    ], Location.prototype, "regularHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationshipData" }),
        __metadata("design:type", RelationshipData)
    ], Location.prototype, "relationshipData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceArea" }),
        __metadata("design:type", ServiceAreaBusiness)
    ], Location.prototype, "serviceArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialHours" }),
        __metadata("design:type", SpecialHours)
    ], Location.prototype, "specialHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCode" }),
        __metadata("design:type", String)
    ], Location.prototype, "storeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], Location.prototype, "websiteUrl", void 0);
    return Location;
}(SpeakeasyBase));
export { Location };

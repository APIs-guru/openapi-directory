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
import { CategoriesInput } from "./categories";
import { LatLng } from "./latlng";
import { MoreHours } from "./morehours";
import { OpenInfoInput } from "./openinfo";
import { PhoneNumbers } from "./phonenumbers";
import { Profile } from "./profile";
import { BusinessHours } from "./businesshours";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { ServiceItem } from "./serviceitem";
import { SpecialHours } from "./specialhours";
import { PostalAddress } from "./postaladdress";
import { Categories } from "./categories";
import { Metadata } from "./metadata";
import { OpenInfo } from "./openinfo";
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
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", CategoriesInput)
    ], LocationInput.prototype, "categories", void 0);
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
        SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "moreHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openInfo" }),
        __metadata("design:type", OpenInfoInput)
    ], LocationInput.prototype, "openInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumbers" }),
        __metadata("design:type", PhoneNumbers)
    ], LocationInput.prototype, "phoneNumbers", void 0);
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
        SpeakeasyMetadata({ data: "json, name=serviceItems", elemType: ServiceItem }),
        __metadata("design:type", Array)
    ], LocationInput.prototype, "serviceItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialHours" }),
        __metadata("design:type", SpecialHours)
    ], LocationInput.prototype, "specialHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCode" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "storeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storefrontAddress" }),
        __metadata("design:type", PostalAddress)
    ], LocationInput.prototype, "storefrontAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUri" }),
        __metadata("design:type", String)
    ], LocationInput.prototype, "websiteUri", void 0);
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
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Categories)
    ], Location.prototype, "categories", void 0);
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
        SpeakeasyMetadata({ data: "json, name=phoneNumbers" }),
        __metadata("design:type", PhoneNumbers)
    ], Location.prototype, "phoneNumbers", void 0);
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
        SpeakeasyMetadata({ data: "json, name=serviceItems", elemType: ServiceItem }),
        __metadata("design:type", Array)
    ], Location.prototype, "serviceItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialHours" }),
        __metadata("design:type", SpecialHours)
    ], Location.prototype, "specialHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeCode" }),
        __metadata("design:type", String)
    ], Location.prototype, "storeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storefrontAddress" }),
        __metadata("design:type", PostalAddress)
    ], Location.prototype, "storefrontAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Location.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUri" }),
        __metadata("design:type", String)
    ], Location.prototype, "websiteUri", void 0);
    return Location;
}(SpeakeasyBase));
export { Location };

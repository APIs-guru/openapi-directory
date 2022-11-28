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
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
export var GoogleCloudContactcenterinsightsV1EntityTypeEnum;
(function (GoogleCloudContactcenterinsightsV1EntityTypeEnum) {
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Person"] = "PERSON";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Location"] = "LOCATION";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Organization"] = "ORGANIZATION";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Event"] = "EVENT";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["WorkOfArt"] = "WORK_OF_ART";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["ConsumerGood"] = "CONSUMER_GOOD";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Other"] = "OTHER";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["PhoneNumber"] = "PHONE_NUMBER";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Address"] = "ADDRESS";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Date"] = "DATE";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Number"] = "NUMBER";
    GoogleCloudContactcenterinsightsV1EntityTypeEnum["Price"] = "PRICE";
})(GoogleCloudContactcenterinsightsV1EntityTypeEnum || (GoogleCloudContactcenterinsightsV1EntityTypeEnum = {}));
// GoogleCloudContactcenterinsightsV1Entity
/**
 * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
**/
var GoogleCloudContactcenterinsightsV1Entity = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1Entity, _super);
    function GoogleCloudContactcenterinsightsV1Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Entity.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1Entity.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salience" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1Entity.prototype, "salience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentiment" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1SentimentData)
    ], GoogleCloudContactcenterinsightsV1Entity.prototype, "sentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Entity.prototype, "type", void 0);
    return GoogleCloudContactcenterinsightsV1Entity;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1Entity };

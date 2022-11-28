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
import { CustomDimension } from "./customdimension";
import { CustomMetric } from "./custommetric";
// Conversion
/**
 * A conversion containing data relevant to DoubleClick Search.
**/
var Conversion = /** @class */ (function (_super) {
    __extends(Conversion, _super);
    function Conversion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adGroupId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "adGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "adId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionModel" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "attributionModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "clickId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "conversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionModifiedTimestamp" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "conversionModifiedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionTimestamp" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "conversionTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countMillis" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "countMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criterionId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "criterionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDimension", elemType: CustomDimension }),
        __metadata("design:type", Array)
    ], Conversion.prototype, "customDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customMetric", elemType: CustomMetric }),
        __metadata("design:type", Array)
    ], Conversion.prototype, "customMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsConversionId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "dsConversionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engineAccountId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "engineAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightOrderId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "floodlightOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryAccountId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "inventoryAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCountry" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "productCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productGroupId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "productGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productLanguage" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "productLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityMillis" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "quantityMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueMicros" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "revenueMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "segmentationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationName" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "segmentationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentationType" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "segmentationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeId" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "storeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Conversion.prototype, "type", void 0);
    return Conversion;
}(SpeakeasyBase));
export { Conversion };

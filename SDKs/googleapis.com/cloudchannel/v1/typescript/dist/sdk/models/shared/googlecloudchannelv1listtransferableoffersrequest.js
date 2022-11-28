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
// GoogleCloudChannelV1ListTransferableOffersRequest
/**
 * Request message for CloudChannelService.ListTransferableOffers
**/
var GoogleCloudChannelV1ListTransferableOffersRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ListTransferableOffersRequest, _super);
    function GoogleCloudChannelV1ListTransferableOffersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudIdentityId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ListTransferableOffersRequest.prototype, "cloudIdentityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ListTransferableOffersRequest.prototype, "customerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ListTransferableOffersRequest.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudChannelV1ListTransferableOffersRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ListTransferableOffersRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ListTransferableOffersRequest.prototype, "sku", void 0);
    return GoogleCloudChannelV1ListTransferableOffersRequest;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ListTransferableOffersRequest };

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
import * as shared from "../shared";
var GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams, _super);
    function GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams.prototype, "offeringId", void 0);
    return GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams };
var GetOfferingsOfferingIdChannelsChannelIdLearnersRequest = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdChannelsChannelIdLearnersRequest, _super);
    function GetOfferingsOfferingIdChannelsChannelIdLearnersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersRequest.prototype, "pathParams", void 0);
    return GetOfferingsOfferingIdChannelsChannelIdLearnersRequest;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdChannelsChannelIdLearnersRequest };
var GetOfferingsOfferingIdChannelsChannelIdLearnersResponse = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdChannelsChannelIdLearnersResponse, _super);
    function GetOfferingsOfferingIdChannelsChannelIdLearnersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChannelResponse)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersResponse.prototype, "channelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOfferingsOfferingIdChannelsChannelIdLearnersResponse.prototype, "statusCode", void 0);
    return GetOfferingsOfferingIdChannelsChannelIdLearnersResponse;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdChannelsChannelIdLearnersResponse };

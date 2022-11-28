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
var GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams, _super);
    function GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams.prototype, "offeringId", void 0);
    return GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams };
var GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest, _super);
    function GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest.prototype, "pathParams", void 0);
    return GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest };
var GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse = /** @class */ (function (_super) {
    __extends(GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse, _super);
    function GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Comment }),
        __metadata("design:type", Array)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse.prototype, "statusCode", void 0);
    return GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse;
}(SpeakeasyBase));
export { GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse };

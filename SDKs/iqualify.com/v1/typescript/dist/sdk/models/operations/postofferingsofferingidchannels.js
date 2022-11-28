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
var PostOfferingsOfferingIdChannelsPathParams = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdChannelsPathParams, _super);
    function PostOfferingsOfferingIdChannelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], PostOfferingsOfferingIdChannelsPathParams.prototype, "offeringId", void 0);
    return PostOfferingsOfferingIdChannelsPathParams;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdChannelsPathParams };
var PostOfferingsOfferingIdChannelsRequest = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdChannelsRequest, _super);
    function PostOfferingsOfferingIdChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOfferingsOfferingIdChannelsPathParams)
    ], PostOfferingsOfferingIdChannelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChannelRequired)
    ], PostOfferingsOfferingIdChannelsRequest.prototype, "request", void 0);
    return PostOfferingsOfferingIdChannelsRequest;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdChannelsRequest };
var PostOfferingsOfferingIdChannelsResponse = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdChannelsResponse, _super);
    function PostOfferingsOfferingIdChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChannelResponse)
    ], PostOfferingsOfferingIdChannelsResponse.prototype, "channelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOfferingsOfferingIdChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostOfferingsOfferingIdChannelsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOfferingsOfferingIdChannelsResponse.prototype, "statusCode", void 0);
    return PostOfferingsOfferingIdChannelsResponse;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdChannelsResponse };

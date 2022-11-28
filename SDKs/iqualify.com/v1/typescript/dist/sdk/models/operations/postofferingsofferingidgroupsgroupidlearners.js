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
var PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams, _super);
    function PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams.prototype, "offeringId", void 0);
    return PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams };
var PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody, _super);
    function PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody.prototype, "email", void 0);
    return PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody };
var PostOfferingsOfferingIdGroupsGroupIdLearnersRequest = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdGroupsGroupIdLearnersRequest, _super);
    function PostOfferingsOfferingIdGroupsGroupIdLearnersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersRequest.prototype, "request", void 0);
    return PostOfferingsOfferingIdGroupsGroupIdLearnersRequest;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdGroupsGroupIdLearnersRequest };
var PostOfferingsOfferingIdGroupsGroupIdLearnersResponse = /** @class */ (function (_super) {
    __extends(PostOfferingsOfferingIdGroupsGroupIdLearnersResponse, _super);
    function PostOfferingsOfferingIdGroupsGroupIdLearnersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserResponse)
    ], PostOfferingsOfferingIdGroupsGroupIdLearnersResponse.prototype, "userResponse", void 0);
    return PostOfferingsOfferingIdGroupsGroupIdLearnersResponse;
}(SpeakeasyBase));
export { PostOfferingsOfferingIdGroupsGroupIdLearnersResponse };

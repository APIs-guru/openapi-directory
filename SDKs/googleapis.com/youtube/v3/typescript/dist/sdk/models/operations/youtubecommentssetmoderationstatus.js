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
export var YoutubeCommentsSetModerationStatusModerationStatusEnum;
(function (YoutubeCommentsSetModerationStatusModerationStatusEnum) {
    YoutubeCommentsSetModerationStatusModerationStatusEnum["Published"] = "published";
    YoutubeCommentsSetModerationStatusModerationStatusEnum["HeldForReview"] = "heldForReview";
    YoutubeCommentsSetModerationStatusModerationStatusEnum["LikelySpam"] = "likelySpam";
    YoutubeCommentsSetModerationStatusModerationStatusEnum["Rejected"] = "rejected";
})(YoutubeCommentsSetModerationStatusModerationStatusEnum || (YoutubeCommentsSetModerationStatusModerationStatusEnum = {}));
var YoutubeCommentsSetModerationStatusQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeCommentsSetModerationStatusQueryParams, _super);
    function YoutubeCommentsSetModerationStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=banAuthor" }),
        __metadata("design:type", Boolean)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "banAuthor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=moderationStatus" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "moderationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeCommentsSetModerationStatusQueryParams;
}(SpeakeasyBase));
export { YoutubeCommentsSetModerationStatusQueryParams };
var YoutubeCommentsSetModerationStatusSecurity = /** @class */ (function (_super) {
    __extends(YoutubeCommentsSetModerationStatusSecurity, _super);
    function YoutubeCommentsSetModerationStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeCommentsSetModerationStatusSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeCommentsSetModerationStatusSecurity.prototype, "oauth2c", void 0);
    return YoutubeCommentsSetModerationStatusSecurity;
}(SpeakeasyBase));
export { YoutubeCommentsSetModerationStatusSecurity };
var YoutubeCommentsSetModerationStatusRequest = /** @class */ (function (_super) {
    __extends(YoutubeCommentsSetModerationStatusRequest, _super);
    function YoutubeCommentsSetModerationStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCommentsSetModerationStatusQueryParams)
    ], YoutubeCommentsSetModerationStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeCommentsSetModerationStatusSecurity)
    ], YoutubeCommentsSetModerationStatusRequest.prototype, "security", void 0);
    return YoutubeCommentsSetModerationStatusRequest;
}(SpeakeasyBase));
export { YoutubeCommentsSetModerationStatusRequest };
var YoutubeCommentsSetModerationStatusResponse = /** @class */ (function (_super) {
    __extends(YoutubeCommentsSetModerationStatusResponse, _super);
    function YoutubeCommentsSetModerationStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeCommentsSetModerationStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeCommentsSetModerationStatusResponse.prototype, "statusCode", void 0);
    return YoutubeCommentsSetModerationStatusResponse;
}(SpeakeasyBase));
export { YoutubeCommentsSetModerationStatusResponse };

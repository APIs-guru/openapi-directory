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
var ContentFreelistingsprogramRequestreviewPathParams = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramRequestreviewPathParams, _super);
    function ContentFreelistingsprogramRequestreviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewPathParams.prototype, "merchantId", void 0);
    return ContentFreelistingsprogramRequestreviewPathParams;
}(SpeakeasyBase));
export { ContentFreelistingsprogramRequestreviewPathParams };
var ContentFreelistingsprogramRequestreviewQueryParams = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramRequestreviewQueryParams, _super);
    function ContentFreelistingsprogramRequestreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewQueryParams.prototype, "uploadProtocol", void 0);
    return ContentFreelistingsprogramRequestreviewQueryParams;
}(SpeakeasyBase));
export { ContentFreelistingsprogramRequestreviewQueryParams };
var ContentFreelistingsprogramRequestreviewSecurity = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramRequestreviewSecurity, _super);
    function ContentFreelistingsprogramRequestreviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentFreelistingsprogramRequestreviewSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentFreelistingsprogramRequestreviewSecurity.prototype, "oauth2c", void 0);
    return ContentFreelistingsprogramRequestreviewSecurity;
}(SpeakeasyBase));
export { ContentFreelistingsprogramRequestreviewSecurity };
var ContentFreelistingsprogramRequestreviewRequest = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramRequestreviewRequest, _super);
    function ContentFreelistingsprogramRequestreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentFreelistingsprogramRequestreviewPathParams)
    ], ContentFreelistingsprogramRequestreviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentFreelistingsprogramRequestreviewQueryParams)
    ], ContentFreelistingsprogramRequestreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RequestReviewFreeListingsRequest)
    ], ContentFreelistingsprogramRequestreviewRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentFreelistingsprogramRequestreviewSecurity)
    ], ContentFreelistingsprogramRequestreviewRequest.prototype, "security", void 0);
    return ContentFreelistingsprogramRequestreviewRequest;
}(SpeakeasyBase));
export { ContentFreelistingsprogramRequestreviewRequest };
var ContentFreelistingsprogramRequestreviewResponse = /** @class */ (function (_super) {
    __extends(ContentFreelistingsprogramRequestreviewResponse, _super);
    function ContentFreelistingsprogramRequestreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentFreelistingsprogramRequestreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentFreelistingsprogramRequestreviewResponse.prototype, "statusCode", void 0);
    return ContentFreelistingsprogramRequestreviewResponse;
}(SpeakeasyBase));
export { ContentFreelistingsprogramRequestreviewResponse };

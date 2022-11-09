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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PubsubTopicsPublishBatchQueryParams = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishBatchQueryParams, _super);
    function PubsubTopicsPublishBatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubTopicsPublishBatchQueryParams;
}(SpeakeasyBase));
export { PubsubTopicsPublishBatchQueryParams };
var PubsubTopicsPublishBatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishBatchSecurityOption1, _super);
    function PubsubTopicsPublishBatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsPublishBatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsPublishBatchSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubTopicsPublishBatchSecurityOption1;
}(SpeakeasyBase));
export { PubsubTopicsPublishBatchSecurityOption1 };
var PubsubTopicsPublishBatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishBatchSecurityOption2, _super);
    function PubsubTopicsPublishBatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsPublishBatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsPublishBatchSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubTopicsPublishBatchSecurityOption2;
}(SpeakeasyBase));
export { PubsubTopicsPublishBatchSecurityOption2 };
var PubsubTopicsPublishBatchSecurity = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishBatchSecurity, _super);
    function PubsubTopicsPublishBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsPublishBatchSecurityOption1)
    ], PubsubTopicsPublishBatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsPublishBatchSecurityOption2)
    ], PubsubTopicsPublishBatchSecurity.prototype, "option2", void 0);
    return PubsubTopicsPublishBatchSecurity;
}(SpeakeasyBase));
export { PubsubTopicsPublishBatchSecurity };
var PubsubTopicsPublishBatchRequest = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishBatchRequest, _super);
    function PubsubTopicsPublishBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsPublishBatchQueryParams)
    ], PubsubTopicsPublishBatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PublishBatchRequest)
    ], PubsubTopicsPublishBatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubTopicsPublishBatchSecurity)
    ], PubsubTopicsPublishBatchRequest.prototype, "security", void 0);
    return PubsubTopicsPublishBatchRequest;
}(SpeakeasyBase));
export { PubsubTopicsPublishBatchRequest };
var PubsubTopicsPublishBatchResponse = /** @class */ (function (_super) {
    __extends(PubsubTopicsPublishBatchResponse, _super);
    function PubsubTopicsPublishBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubTopicsPublishBatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PublishBatchResponse)
    ], PubsubTopicsPublishBatchResponse.prototype, "publishBatchResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubTopicsPublishBatchResponse.prototype, "statusCode", void 0);
    return PubsubTopicsPublishBatchResponse;
}(SpeakeasyBase));
export { PubsubTopicsPublishBatchResponse };

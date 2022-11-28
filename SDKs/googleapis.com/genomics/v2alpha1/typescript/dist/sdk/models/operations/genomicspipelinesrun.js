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
var GenomicsPipelinesRunQueryParams = /** @class */ (function (_super) {
    __extends(GenomicsPipelinesRunQueryParams, _super);
    function GenomicsPipelinesRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GenomicsPipelinesRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunQueryParams.prototype, "uploadProtocol", void 0);
    return GenomicsPipelinesRunQueryParams;
}(SpeakeasyBase));
export { GenomicsPipelinesRunQueryParams };
var GenomicsPipelinesRunSecurityOption1 = /** @class */ (function (_super) {
    __extends(GenomicsPipelinesRunSecurityOption1, _super);
    function GenomicsPipelinesRunSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsPipelinesRunSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsPipelinesRunSecurityOption1.prototype, "oauth2c", void 0);
    return GenomicsPipelinesRunSecurityOption1;
}(SpeakeasyBase));
export { GenomicsPipelinesRunSecurityOption1 };
var GenomicsPipelinesRunSecurityOption2 = /** @class */ (function (_super) {
    __extends(GenomicsPipelinesRunSecurityOption2, _super);
    function GenomicsPipelinesRunSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsPipelinesRunSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsPipelinesRunSecurityOption2.prototype, "oauth2c", void 0);
    return GenomicsPipelinesRunSecurityOption2;
}(SpeakeasyBase));
export { GenomicsPipelinesRunSecurityOption2 };
var GenomicsPipelinesRunSecurity = /** @class */ (function (_super) {
    __extends(GenomicsPipelinesRunSecurity, _super);
    function GenomicsPipelinesRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsPipelinesRunSecurityOption1)
    ], GenomicsPipelinesRunSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsPipelinesRunSecurityOption2)
    ], GenomicsPipelinesRunSecurity.prototype, "option2", void 0);
    return GenomicsPipelinesRunSecurity;
}(SpeakeasyBase));
export { GenomicsPipelinesRunSecurity };
var GenomicsPipelinesRunRequest = /** @class */ (function (_super) {
    __extends(GenomicsPipelinesRunRequest, _super);
    function GenomicsPipelinesRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsPipelinesRunQueryParams)
    ], GenomicsPipelinesRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunPipelineRequest)
    ], GenomicsPipelinesRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsPipelinesRunSecurity)
    ], GenomicsPipelinesRunRequest.prototype, "security", void 0);
    return GenomicsPipelinesRunRequest;
}(SpeakeasyBase));
export { GenomicsPipelinesRunRequest };
var GenomicsPipelinesRunResponse = /** @class */ (function (_super) {
    __extends(GenomicsPipelinesRunResponse, _super);
    function GenomicsPipelinesRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenomicsPipelinesRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], GenomicsPipelinesRunResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenomicsPipelinesRunResponse.prototype, "statusCode", void 0);
    return GenomicsPipelinesRunResponse;
}(SpeakeasyBase));
export { GenomicsPipelinesRunResponse };

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
var CloudtraceProjectsTracesBatchWritePathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWritePathParams, _super);
    function CloudtraceProjectsTracesBatchWritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWritePathParams.prototype, "name", void 0);
    return CloudtraceProjectsTracesBatchWritePathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWritePathParams };
var CloudtraceProjectsTracesBatchWriteQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWriteQueryParams, _super);
    function CloudtraceProjectsTracesBatchWriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTracesBatchWriteQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWriteQueryParams };
var CloudtraceProjectsTracesBatchWriteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWriteSecurityOption1, _super);
    function CloudtraceProjectsTracesBatchWriteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesBatchWriteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesBatchWriteSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesBatchWriteSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWriteSecurityOption1 };
var CloudtraceProjectsTracesBatchWriteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWriteSecurityOption2, _super);
    function CloudtraceProjectsTracesBatchWriteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesBatchWriteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesBatchWriteSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesBatchWriteSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWriteSecurityOption2 };
var CloudtraceProjectsTracesBatchWriteSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWriteSecurity, _super);
    function CloudtraceProjectsTracesBatchWriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesBatchWriteSecurityOption1)
    ], CloudtraceProjectsTracesBatchWriteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesBatchWriteSecurityOption2)
    ], CloudtraceProjectsTracesBatchWriteSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTracesBatchWriteSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWriteSecurity };
var CloudtraceProjectsTracesBatchWriteRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWriteRequest, _super);
    function CloudtraceProjectsTracesBatchWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTracesBatchWritePathParams)
    ], CloudtraceProjectsTracesBatchWriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTracesBatchWriteQueryParams)
    ], CloudtraceProjectsTracesBatchWriteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchWriteSpansRequest)
    ], CloudtraceProjectsTracesBatchWriteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTracesBatchWriteSecurity)
    ], CloudtraceProjectsTracesBatchWriteRequest.prototype, "security", void 0);
    return CloudtraceProjectsTracesBatchWriteRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWriteRequest };
var CloudtraceProjectsTracesBatchWriteResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesBatchWriteResponse, _super);
    function CloudtraceProjectsTracesBatchWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesBatchWriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloudtraceProjectsTracesBatchWriteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTracesBatchWriteResponse.prototype, "statusCode", void 0);
    return CloudtraceProjectsTracesBatchWriteResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesBatchWriteResponse };

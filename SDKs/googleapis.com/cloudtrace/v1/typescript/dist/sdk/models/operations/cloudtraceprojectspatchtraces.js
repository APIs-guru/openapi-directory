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
var CloudtraceProjectsPatchTracesPathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesPathParams, _super);
    function CloudtraceProjectsPatchTracesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesPathParams.prototype, "projectId", void 0);
    return CloudtraceProjectsPatchTracesPathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesPathParams };
var CloudtraceProjectsPatchTracesQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesQueryParams, _super);
    function CloudtraceProjectsPatchTracesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsPatchTracesQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesQueryParams };
var CloudtraceProjectsPatchTracesSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesSecurityOption1, _super);
    function CloudtraceProjectsPatchTracesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsPatchTracesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsPatchTracesSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsPatchTracesSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesSecurityOption1 };
var CloudtraceProjectsPatchTracesSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesSecurityOption2, _super);
    function CloudtraceProjectsPatchTracesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsPatchTracesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsPatchTracesSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsPatchTracesSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesSecurityOption2 };
var CloudtraceProjectsPatchTracesSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesSecurity, _super);
    function CloudtraceProjectsPatchTracesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsPatchTracesSecurityOption1)
    ], CloudtraceProjectsPatchTracesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsPatchTracesSecurityOption2)
    ], CloudtraceProjectsPatchTracesSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsPatchTracesSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesSecurity };
var CloudtraceProjectsPatchTracesRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesRequest, _super);
    function CloudtraceProjectsPatchTracesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsPatchTracesPathParams)
    ], CloudtraceProjectsPatchTracesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsPatchTracesQueryParams)
    ], CloudtraceProjectsPatchTracesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Traces)
    ], CloudtraceProjectsPatchTracesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsPatchTracesSecurity)
    ], CloudtraceProjectsPatchTracesRequest.prototype, "security", void 0);
    return CloudtraceProjectsPatchTracesRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesRequest };
var CloudtraceProjectsPatchTracesResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsPatchTracesResponse, _super);
    function CloudtraceProjectsPatchTracesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsPatchTracesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloudtraceProjectsPatchTracesResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsPatchTracesResponse.prototype, "statusCode", void 0);
    return CloudtraceProjectsPatchTracesResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsPatchTracesResponse };

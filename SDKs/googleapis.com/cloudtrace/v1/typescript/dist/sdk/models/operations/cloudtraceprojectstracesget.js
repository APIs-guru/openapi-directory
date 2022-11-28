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
var CloudtraceProjectsTracesGetPathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetPathParams, _super);
    function CloudtraceProjectsTracesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=traceId" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetPathParams.prototype, "traceId", void 0);
    return CloudtraceProjectsTracesGetPathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetPathParams };
var CloudtraceProjectsTracesGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetQueryParams, _super);
    function CloudtraceProjectsTracesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudtraceProjectsTracesGetQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetQueryParams };
var CloudtraceProjectsTracesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetSecurityOption1, _super);
    function CloudtraceProjectsTracesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesGetSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetSecurityOption1 };
var CloudtraceProjectsTracesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetSecurityOption2, _super);
    function CloudtraceProjectsTracesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesGetSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetSecurityOption2 };
var CloudtraceProjectsTracesGetSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetSecurity, _super);
    function CloudtraceProjectsTracesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesGetSecurityOption1)
    ], CloudtraceProjectsTracesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesGetSecurityOption2)
    ], CloudtraceProjectsTracesGetSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTracesGetSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetSecurity };
var CloudtraceProjectsTracesGetRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetRequest, _super);
    function CloudtraceProjectsTracesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTracesGetPathParams)
    ], CloudtraceProjectsTracesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTracesGetQueryParams)
    ], CloudtraceProjectsTracesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudtraceProjectsTracesGetSecurity)
    ], CloudtraceProjectsTracesGetRequest.prototype, "security", void 0);
    return CloudtraceProjectsTracesGetRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetRequest };
var CloudtraceProjectsTracesGetResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesGetResponse, _super);
    function CloudtraceProjectsTracesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTracesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Trace)
    ], CloudtraceProjectsTracesGetResponse.prototype, "trace", void 0);
    return CloudtraceProjectsTracesGetResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesGetResponse };

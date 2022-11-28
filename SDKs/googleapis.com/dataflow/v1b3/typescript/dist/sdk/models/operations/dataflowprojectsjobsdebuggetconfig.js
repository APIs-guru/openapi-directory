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
var DataflowProjectsJobsDebugGetConfigPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigPathParams, _super);
    function DataflowProjectsJobsDebugGetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsDebugGetConfigPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigPathParams };
var DataflowProjectsJobsDebugGetConfigQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigQueryParams, _super);
    function DataflowProjectsJobsDebugGetConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsDebugGetConfigQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigQueryParams };
var DataflowProjectsJobsDebugGetConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption1, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigSecurityOption1 };
var DataflowProjectsJobsDebugGetConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption2, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigSecurityOption2 };
var DataflowProjectsJobsDebugGetConfigSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption3, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigSecurityOption3 };
var DataflowProjectsJobsDebugGetConfigSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurityOption4, _super);
    function DataflowProjectsJobsDebugGetConfigSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsDebugGetConfigSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigSecurityOption4 };
var DataflowProjectsJobsDebugGetConfigSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigSecurity, _super);
    function DataflowProjectsJobsDebugGetConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption1)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption2)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption3)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurityOption4)
    ], DataflowProjectsJobsDebugGetConfigSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsDebugGetConfigSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigSecurity };
var DataflowProjectsJobsDebugGetConfigRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigRequest, _super);
    function DataflowProjectsJobsDebugGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigPathParams)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigQueryParams)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetDebugConfigRequest)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsDebugGetConfigSecurity)
    ], DataflowProjectsJobsDebugGetConfigRequest.prototype, "security", void 0);
    return DataflowProjectsJobsDebugGetConfigRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigRequest };
var DataflowProjectsJobsDebugGetConfigResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsDebugGetConfigResponse, _super);
    function DataflowProjectsJobsDebugGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDebugConfigResponse)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "getDebugConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsDebugGetConfigResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsDebugGetConfigResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsDebugGetConfigResponse };

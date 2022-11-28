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
var DataflowProjectsLocationsJobsDebugGetConfigPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigPathParams, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigPathParams };
var DataflowProjectsLocationsJobsDebugGetConfigQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigQueryParams, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigQueryParams };
var DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1 };
var DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2 };
var DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3 };
var DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4 };
var DataflowProjectsLocationsJobsDebugGetConfigSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigSecurity, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4)
    ], DataflowProjectsLocationsJobsDebugGetConfigSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigSecurity };
var DataflowProjectsLocationsJobsDebugGetConfigRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigRequest, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigPathParams)
    ], DataflowProjectsLocationsJobsDebugGetConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigQueryParams)
    ], DataflowProjectsLocationsJobsDebugGetConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetDebugConfigRequest)
    ], DataflowProjectsLocationsJobsDebugGetConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsDebugGetConfigSecurity)
    ], DataflowProjectsLocationsJobsDebugGetConfigRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigRequest };
var DataflowProjectsLocationsJobsDebugGetConfigResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsDebugGetConfigResponse, _super);
    function DataflowProjectsLocationsJobsDebugGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsDebugGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDebugConfigResponse)
    ], DataflowProjectsLocationsJobsDebugGetConfigResponse.prototype, "getDebugConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsDebugGetConfigResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsDebugGetConfigResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsDebugGetConfigResponse };

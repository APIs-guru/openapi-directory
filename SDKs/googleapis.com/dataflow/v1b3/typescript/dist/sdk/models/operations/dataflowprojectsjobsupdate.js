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
var DataflowProjectsJobsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdatePathParams, _super);
    function DataflowProjectsJobsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdatePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsUpdatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdatePathParams };
var DataflowProjectsJobsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateQueryParams, _super);
    function DataflowProjectsJobsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsUpdateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateQueryParams };
var DataflowProjectsJobsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateSecurityOption1, _super);
    function DataflowProjectsJobsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsUpdateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateSecurityOption1 };
var DataflowProjectsJobsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateSecurityOption2, _super);
    function DataflowProjectsJobsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsUpdateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateSecurityOption2 };
var DataflowProjectsJobsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateSecurityOption3, _super);
    function DataflowProjectsJobsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsUpdateSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateSecurityOption3 };
var DataflowProjectsJobsUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateSecurityOption4, _super);
    function DataflowProjectsJobsUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsUpdateSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateSecurityOption4 };
var DataflowProjectsJobsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateSecurity, _super);
    function DataflowProjectsJobsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsUpdateSecurityOption1)
    ], DataflowProjectsJobsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsUpdateSecurityOption2)
    ], DataflowProjectsJobsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsUpdateSecurityOption3)
    ], DataflowProjectsJobsUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsUpdateSecurityOption4)
    ], DataflowProjectsJobsUpdateSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsUpdateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateSecurity };
var DataflowProjectsJobsUpdateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateRequest, _super);
    function DataflowProjectsJobsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsUpdatePathParams)
    ], DataflowProjectsJobsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsUpdateQueryParams)
    ], DataflowProjectsJobsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], DataflowProjectsJobsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsUpdateSecurity)
    ], DataflowProjectsJobsUpdateRequest.prototype, "security", void 0);
    return DataflowProjectsJobsUpdateRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateRequest };
var DataflowProjectsJobsUpdateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsUpdateResponse, _super);
    function DataflowProjectsJobsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsJobsUpdateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsUpdateResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsUpdateResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsUpdateResponse };

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
var DataflowProjectsLocationsJobsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdatePathParams, _super);
    function DataflowProjectsLocationsJobsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdatePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdatePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdatePathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsUpdatePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdatePathParams };
var DataflowProjectsLocationsJobsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateQueryParams, _super);
    function DataflowProjectsLocationsJobsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsUpdateQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateQueryParams };
var DataflowProjectsLocationsJobsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateSecurityOption1, _super);
    function DataflowProjectsLocationsJobsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsUpdateSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateSecurityOption1 };
var DataflowProjectsLocationsJobsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateSecurityOption2, _super);
    function DataflowProjectsLocationsJobsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsUpdateSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateSecurityOption2 };
var DataflowProjectsLocationsJobsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateSecurityOption3, _super);
    function DataflowProjectsLocationsJobsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsUpdateSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateSecurityOption3 };
var DataflowProjectsLocationsJobsUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateSecurityOption4, _super);
    function DataflowProjectsLocationsJobsUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsUpdateSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateSecurityOption4 };
var DataflowProjectsLocationsJobsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateSecurity, _super);
    function DataflowProjectsLocationsJobsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdateSecurityOption1)
    ], DataflowProjectsLocationsJobsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdateSecurityOption2)
    ], DataflowProjectsLocationsJobsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdateSecurityOption3)
    ], DataflowProjectsLocationsJobsUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdateSecurityOption4)
    ], DataflowProjectsLocationsJobsUpdateSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsUpdateSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateSecurity };
var DataflowProjectsLocationsJobsUpdateRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateRequest, _super);
    function DataflowProjectsLocationsJobsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdatePathParams)
    ], DataflowProjectsLocationsJobsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdateQueryParams)
    ], DataflowProjectsLocationsJobsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.JobInput)
    ], DataflowProjectsLocationsJobsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsUpdateSecurity)
    ], DataflowProjectsLocationsJobsUpdateRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsUpdateRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateRequest };
var DataflowProjectsLocationsJobsUpdateResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsUpdateResponse, _super);
    function DataflowProjectsLocationsJobsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Job)
    ], DataflowProjectsLocationsJobsUpdateResponse.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsUpdateResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsUpdateResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsUpdateResponse };

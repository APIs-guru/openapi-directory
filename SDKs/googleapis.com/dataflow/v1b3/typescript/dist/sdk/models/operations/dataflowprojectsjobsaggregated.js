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
var DataflowProjectsJobsAggregatedPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedPathParams, _super);
    function DataflowProjectsJobsAggregatedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsAggregatedPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedPathParams };
export var DataflowProjectsJobsAggregatedFilterEnum;
(function (DataflowProjectsJobsAggregatedFilterEnum) {
    DataflowProjectsJobsAggregatedFilterEnum["Unknown"] = "UNKNOWN";
    DataflowProjectsJobsAggregatedFilterEnum["All"] = "ALL";
    DataflowProjectsJobsAggregatedFilterEnum["Terminated"] = "TERMINATED";
    DataflowProjectsJobsAggregatedFilterEnum["Active"] = "ACTIVE";
})(DataflowProjectsJobsAggregatedFilterEnum || (DataflowProjectsJobsAggregatedFilterEnum = {}));
export var DataflowProjectsJobsAggregatedViewEnum;
(function (DataflowProjectsJobsAggregatedViewEnum) {
    DataflowProjectsJobsAggregatedViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsJobsAggregatedViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsJobsAggregatedViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsJobsAggregatedViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsJobsAggregatedViewEnum || (DataflowProjectsJobsAggregatedViewEnum = {}));
var DataflowProjectsJobsAggregatedQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedQueryParams, _super);
    function DataflowProjectsJobsAggregatedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedQueryParams.prototype, "view", void 0);
    return DataflowProjectsJobsAggregatedQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedQueryParams };
var DataflowProjectsJobsAggregatedSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedSecurityOption1, _super);
    function DataflowProjectsJobsAggregatedSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsAggregatedSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsAggregatedSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsAggregatedSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedSecurityOption1 };
var DataflowProjectsJobsAggregatedSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedSecurityOption2, _super);
    function DataflowProjectsJobsAggregatedSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsAggregatedSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsAggregatedSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsAggregatedSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedSecurityOption2 };
var DataflowProjectsJobsAggregatedSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedSecurityOption3, _super);
    function DataflowProjectsJobsAggregatedSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsAggregatedSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsAggregatedSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsAggregatedSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedSecurityOption3 };
var DataflowProjectsJobsAggregatedSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedSecurityOption4, _super);
    function DataflowProjectsJobsAggregatedSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsAggregatedSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsAggregatedSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsAggregatedSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedSecurityOption4 };
var DataflowProjectsJobsAggregatedSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedSecurity, _super);
    function DataflowProjectsJobsAggregatedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsAggregatedSecurityOption1)
    ], DataflowProjectsJobsAggregatedSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsAggregatedSecurityOption2)
    ], DataflowProjectsJobsAggregatedSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsAggregatedSecurityOption3)
    ], DataflowProjectsJobsAggregatedSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsAggregatedSecurityOption4)
    ], DataflowProjectsJobsAggregatedSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsAggregatedSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedSecurity };
var DataflowProjectsJobsAggregatedRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedRequest, _super);
    function DataflowProjectsJobsAggregatedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsAggregatedPathParams)
    ], DataflowProjectsJobsAggregatedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsAggregatedQueryParams)
    ], DataflowProjectsJobsAggregatedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsAggregatedSecurity)
    ], DataflowProjectsJobsAggregatedRequest.prototype, "security", void 0);
    return DataflowProjectsJobsAggregatedRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedRequest };
var DataflowProjectsJobsAggregatedResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsAggregatedResponse, _super);
    function DataflowProjectsJobsAggregatedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsAggregatedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], DataflowProjectsJobsAggregatedResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsAggregatedResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsAggregatedResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsAggregatedResponse };

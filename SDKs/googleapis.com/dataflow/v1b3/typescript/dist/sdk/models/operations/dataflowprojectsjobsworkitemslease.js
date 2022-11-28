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
var DataflowProjectsJobsWorkItemsLeasePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeasePathParams, _super);
    function DataflowProjectsJobsWorkItemsLeasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeasePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeasePathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsWorkItemsLeasePathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeasePathParams };
var DataflowProjectsJobsWorkItemsLeaseQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseQueryParams, _super);
    function DataflowProjectsJobsWorkItemsLeaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsWorkItemsLeaseQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseQueryParams };
var DataflowProjectsJobsWorkItemsLeaseSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseSecurityOption1, _super);
    function DataflowProjectsJobsWorkItemsLeaseSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsLeaseSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseSecurityOption1 };
var DataflowProjectsJobsWorkItemsLeaseSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseSecurityOption2, _super);
    function DataflowProjectsJobsWorkItemsLeaseSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsLeaseSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseSecurityOption2 };
var DataflowProjectsJobsWorkItemsLeaseSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseSecurityOption3, _super);
    function DataflowProjectsJobsWorkItemsLeaseSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsLeaseSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseSecurityOption3 };
var DataflowProjectsJobsWorkItemsLeaseSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseSecurityOption4, _super);
    function DataflowProjectsJobsWorkItemsLeaseSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsWorkItemsLeaseSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsWorkItemsLeaseSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseSecurityOption4 };
var DataflowProjectsJobsWorkItemsLeaseSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseSecurity, _super);
    function DataflowProjectsJobsWorkItemsLeaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeaseSecurityOption1)
    ], DataflowProjectsJobsWorkItemsLeaseSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeaseSecurityOption2)
    ], DataflowProjectsJobsWorkItemsLeaseSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeaseSecurityOption3)
    ], DataflowProjectsJobsWorkItemsLeaseSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeaseSecurityOption4)
    ], DataflowProjectsJobsWorkItemsLeaseSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsWorkItemsLeaseSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseSecurity };
var DataflowProjectsJobsWorkItemsLeaseRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseRequest, _super);
    function DataflowProjectsJobsWorkItemsLeaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeasePathParams)
    ], DataflowProjectsJobsWorkItemsLeaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeaseQueryParams)
    ], DataflowProjectsJobsWorkItemsLeaseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LeaseWorkItemRequest)
    ], DataflowProjectsJobsWorkItemsLeaseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsWorkItemsLeaseSecurity)
    ], DataflowProjectsJobsWorkItemsLeaseRequest.prototype, "security", void 0);
    return DataflowProjectsJobsWorkItemsLeaseRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseRequest };
var DataflowProjectsJobsWorkItemsLeaseResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsWorkItemsLeaseResponse, _super);
    function DataflowProjectsJobsWorkItemsLeaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsWorkItemsLeaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaseWorkItemResponse)
    ], DataflowProjectsJobsWorkItemsLeaseResponse.prototype, "leaseWorkItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsWorkItemsLeaseResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsWorkItemsLeaseResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsWorkItemsLeaseResponse };

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
var DataflowProjectsLocationsJobsWorkItemsLeasePathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeasePathParams, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeasePathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeasePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeasePathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeasePathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeasePathParams };
var DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams };
var DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1 };
var DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2 };
var DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3 };
var DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4 };
var DataflowProjectsLocationsJobsWorkItemsLeaseSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseSecurity, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseSecurity };
var DataflowProjectsLocationsJobsWorkItemsLeaseRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseRequest, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeasePathParams)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LeaseWorkItemRequest)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsWorkItemsLeaseSecurity)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseRequest };
var DataflowProjectsLocationsJobsWorkItemsLeaseResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsWorkItemsLeaseResponse, _super);
    function DataflowProjectsLocationsJobsWorkItemsLeaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaseWorkItemResponse)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseResponse.prototype, "leaseWorkItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsWorkItemsLeaseResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsWorkItemsLeaseResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsWorkItemsLeaseResponse };

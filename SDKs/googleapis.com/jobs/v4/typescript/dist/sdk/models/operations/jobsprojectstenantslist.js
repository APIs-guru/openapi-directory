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
var JobsProjectsTenantsListPathParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListPathParams, _super);
    function JobsProjectsTenantsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListPathParams.prototype, "parent", void 0);
    return JobsProjectsTenantsListPathParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsListPathParams };
var JobsProjectsTenantsListQueryParams = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListQueryParams, _super);
    function JobsProjectsTenantsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], JobsProjectsTenantsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListQueryParams.prototype, "uploadProtocol", void 0);
    return JobsProjectsTenantsListQueryParams;
}(SpeakeasyBase));
export { JobsProjectsTenantsListQueryParams };
var JobsProjectsTenantsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListSecurityOption1, _super);
    function JobsProjectsTenantsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsListSecurityOption1.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsListSecurityOption1;
}(SpeakeasyBase));
export { JobsProjectsTenantsListSecurityOption1 };
var JobsProjectsTenantsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListSecurityOption2, _super);
    function JobsProjectsTenantsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], JobsProjectsTenantsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], JobsProjectsTenantsListSecurityOption2.prototype, "oauth2c", void 0);
    return JobsProjectsTenantsListSecurityOption2;
}(SpeakeasyBase));
export { JobsProjectsTenantsListSecurityOption2 };
var JobsProjectsTenantsListSecurity = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListSecurity, _super);
    function JobsProjectsTenantsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsListSecurityOption1)
    ], JobsProjectsTenantsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", JobsProjectsTenantsListSecurityOption2)
    ], JobsProjectsTenantsListSecurity.prototype, "option2", void 0);
    return JobsProjectsTenantsListSecurity;
}(SpeakeasyBase));
export { JobsProjectsTenantsListSecurity };
var JobsProjectsTenantsListRequest = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListRequest, _super);
    function JobsProjectsTenantsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsListPathParams)
    ], JobsProjectsTenantsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsListQueryParams)
    ], JobsProjectsTenantsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JobsProjectsTenantsListSecurity)
    ], JobsProjectsTenantsListRequest.prototype, "security", void 0);
    return JobsProjectsTenantsListRequest;
}(SpeakeasyBase));
export { JobsProjectsTenantsListRequest };
var JobsProjectsTenantsListResponse = /** @class */ (function (_super) {
    __extends(JobsProjectsTenantsListResponse, _super);
    function JobsProjectsTenantsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JobsProjectsTenantsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTenantsResponse)
    ], JobsProjectsTenantsListResponse.prototype, "listTenantsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JobsProjectsTenantsListResponse.prototype, "statusCode", void 0);
    return JobsProjectsTenantsListResponse;
}(SpeakeasyBase));
export { JobsProjectsTenantsListResponse };

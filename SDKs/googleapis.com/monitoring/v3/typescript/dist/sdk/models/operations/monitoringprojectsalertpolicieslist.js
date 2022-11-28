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
var MonitoringProjectsAlertPoliciesListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListPathParams, _super);
    function MonitoringProjectsAlertPoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListPathParams.prototype, "name", void 0);
    return MonitoringProjectsAlertPoliciesListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListPathParams };
var MonitoringProjectsAlertPoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListQueryParams, _super);
    function MonitoringProjectsAlertPoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsAlertPoliciesListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListQueryParams };
var MonitoringProjectsAlertPoliciesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListSecurityOption1, _super);
    function MonitoringProjectsAlertPoliciesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsAlertPoliciesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsAlertPoliciesListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsAlertPoliciesListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListSecurityOption1 };
var MonitoringProjectsAlertPoliciesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListSecurityOption2, _super);
    function MonitoringProjectsAlertPoliciesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsAlertPoliciesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsAlertPoliciesListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsAlertPoliciesListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListSecurityOption2 };
var MonitoringProjectsAlertPoliciesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListSecurityOption3, _super);
    function MonitoringProjectsAlertPoliciesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsAlertPoliciesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsAlertPoliciesListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsAlertPoliciesListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListSecurityOption3 };
var MonitoringProjectsAlertPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListSecurity, _super);
    function MonitoringProjectsAlertPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsAlertPoliciesListSecurityOption1)
    ], MonitoringProjectsAlertPoliciesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsAlertPoliciesListSecurityOption2)
    ], MonitoringProjectsAlertPoliciesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsAlertPoliciesListSecurityOption3)
    ], MonitoringProjectsAlertPoliciesListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsAlertPoliciesListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListSecurity };
var MonitoringProjectsAlertPoliciesListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListRequest, _super);
    function MonitoringProjectsAlertPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsAlertPoliciesListPathParams)
    ], MonitoringProjectsAlertPoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsAlertPoliciesListQueryParams)
    ], MonitoringProjectsAlertPoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsAlertPoliciesListSecurity)
    ], MonitoringProjectsAlertPoliciesListRequest.prototype, "security", void 0);
    return MonitoringProjectsAlertPoliciesListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListRequest };
var MonitoringProjectsAlertPoliciesListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesListResponse, _super);
    function MonitoringProjectsAlertPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAlertPoliciesResponse)
    ], MonitoringProjectsAlertPoliciesListResponse.prototype, "listAlertPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsAlertPoliciesListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsAlertPoliciesListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesListResponse };

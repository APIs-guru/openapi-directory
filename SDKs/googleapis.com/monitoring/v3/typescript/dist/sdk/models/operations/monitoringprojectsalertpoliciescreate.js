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
var MonitoringProjectsAlertPoliciesCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreatePathParams, _super);
    function MonitoringProjectsAlertPoliciesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreatePathParams.prototype, "name", void 0);
    return MonitoringProjectsAlertPoliciesCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreatePathParams };
var MonitoringProjectsAlertPoliciesCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreateQueryParams, _super);
    function MonitoringProjectsAlertPoliciesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsAlertPoliciesCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreateQueryParams };
var MonitoringProjectsAlertPoliciesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreateSecurityOption1, _super);
    function MonitoringProjectsAlertPoliciesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsAlertPoliciesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsAlertPoliciesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsAlertPoliciesCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreateSecurityOption1 };
var MonitoringProjectsAlertPoliciesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreateSecurityOption2, _super);
    function MonitoringProjectsAlertPoliciesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsAlertPoliciesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsAlertPoliciesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsAlertPoliciesCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreateSecurityOption2 };
var MonitoringProjectsAlertPoliciesCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreateSecurity, _super);
    function MonitoringProjectsAlertPoliciesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsAlertPoliciesCreateSecurityOption1)
    ], MonitoringProjectsAlertPoliciesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsAlertPoliciesCreateSecurityOption2)
    ], MonitoringProjectsAlertPoliciesCreateSecurity.prototype, "option2", void 0);
    return MonitoringProjectsAlertPoliciesCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreateSecurity };
var MonitoringProjectsAlertPoliciesCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreateRequest, _super);
    function MonitoringProjectsAlertPoliciesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsAlertPoliciesCreatePathParams)
    ], MonitoringProjectsAlertPoliciesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsAlertPoliciesCreateQueryParams)
    ], MonitoringProjectsAlertPoliciesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AlertPolicy)
    ], MonitoringProjectsAlertPoliciesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsAlertPoliciesCreateSecurity)
    ], MonitoringProjectsAlertPoliciesCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsAlertPoliciesCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreateRequest };
var MonitoringProjectsAlertPoliciesCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsAlertPoliciesCreateResponse, _super);
    function MonitoringProjectsAlertPoliciesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AlertPolicy)
    ], MonitoringProjectsAlertPoliciesCreateResponse.prototype, "alertPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsAlertPoliciesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsAlertPoliciesCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsAlertPoliciesCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsAlertPoliciesCreateResponse };

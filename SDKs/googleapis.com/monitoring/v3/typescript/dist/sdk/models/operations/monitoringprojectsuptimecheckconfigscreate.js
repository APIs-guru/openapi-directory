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
var MonitoringProjectsUptimeCheckConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreatePathParams, _super);
    function MonitoringProjectsUptimeCheckConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreatePathParams.prototype, "parent", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreatePathParams };
var MonitoringProjectsUptimeCheckConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreateQueryParams, _super);
    function MonitoringProjectsUptimeCheckConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreateQueryParams };
var MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1, _super);
    function MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1 };
var MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2, _super);
    function MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2 };
var MonitoringProjectsUptimeCheckConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreateSecurity, _super);
    function MonitoringProjectsUptimeCheckConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1)
    ], MonitoringProjectsUptimeCheckConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2)
    ], MonitoringProjectsUptimeCheckConfigsCreateSecurity.prototype, "option2", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreateSecurity };
var MonitoringProjectsUptimeCheckConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreateRequest, _super);
    function MonitoringProjectsUptimeCheckConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsCreatePathParams)
    ], MonitoringProjectsUptimeCheckConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsCreateQueryParams)
    ], MonitoringProjectsUptimeCheckConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UptimeCheckConfig)
    ], MonitoringProjectsUptimeCheckConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsCreateSecurity)
    ], MonitoringProjectsUptimeCheckConfigsCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreateRequest };
var MonitoringProjectsUptimeCheckConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsCreateResponse, _super);
    function MonitoringProjectsUptimeCheckConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsUptimeCheckConfigsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UptimeCheckConfig)
    ], MonitoringProjectsUptimeCheckConfigsCreateResponse.prototype, "uptimeCheckConfig", void 0);
    return MonitoringProjectsUptimeCheckConfigsCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsCreateResponse };

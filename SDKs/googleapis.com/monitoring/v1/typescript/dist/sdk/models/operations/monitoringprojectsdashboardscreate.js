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
var MonitoringProjectsDashboardsCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreatePathParams, _super);
    function MonitoringProjectsDashboardsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreatePathParams.prototype, "parent", void 0);
    return MonitoringProjectsDashboardsCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreatePathParams };
var MonitoringProjectsDashboardsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateQueryParams, _super);
    function MonitoringProjectsDashboardsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsCreateQueryParams.prototype, "validateOnly", void 0);
    return MonitoringProjectsDashboardsCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateQueryParams };
var MonitoringProjectsDashboardsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateSecurityOption1, _super);
    function MonitoringProjectsDashboardsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateSecurityOption1 };
var MonitoringProjectsDashboardsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateSecurityOption2, _super);
    function MonitoringProjectsDashboardsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateSecurityOption2 };
var MonitoringProjectsDashboardsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateSecurityOption3, _super);
    function MonitoringProjectsDashboardsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsCreateSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateSecurityOption3 };
var MonitoringProjectsDashboardsCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateSecurity, _super);
    function MonitoringProjectsDashboardsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsCreateSecurityOption1)
    ], MonitoringProjectsDashboardsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsCreateSecurityOption2)
    ], MonitoringProjectsDashboardsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsCreateSecurityOption3)
    ], MonitoringProjectsDashboardsCreateSecurity.prototype, "option3", void 0);
    return MonitoringProjectsDashboardsCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateSecurity };
var MonitoringProjectsDashboardsCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateRequest, _super);
    function MonitoringProjectsDashboardsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsCreatePathParams)
    ], MonitoringProjectsDashboardsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsCreateQueryParams)
    ], MonitoringProjectsDashboardsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Dashboard)
    ], MonitoringProjectsDashboardsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsCreateSecurity)
    ], MonitoringProjectsDashboardsCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsDashboardsCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateRequest };
var MonitoringProjectsDashboardsCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsCreateResponse, _super);
    function MonitoringProjectsDashboardsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dashboard)
    ], MonitoringProjectsDashboardsCreateResponse.prototype, "dashboard", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsDashboardsCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsDashboardsCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsCreateResponse };

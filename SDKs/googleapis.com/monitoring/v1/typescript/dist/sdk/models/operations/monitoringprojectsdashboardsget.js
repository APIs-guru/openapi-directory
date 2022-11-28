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
var MonitoringProjectsDashboardsGetPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetPathParams, _super);
    function MonitoringProjectsDashboardsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetPathParams.prototype, "name", void 0);
    return MonitoringProjectsDashboardsGetPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetPathParams };
var MonitoringProjectsDashboardsGetQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetQueryParams, _super);
    function MonitoringProjectsDashboardsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsDashboardsGetQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetQueryParams };
var MonitoringProjectsDashboardsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetSecurityOption1, _super);
    function MonitoringProjectsDashboardsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsGetSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsGetSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetSecurityOption1 };
var MonitoringProjectsDashboardsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetSecurityOption2, _super);
    function MonitoringProjectsDashboardsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsGetSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsGetSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetSecurityOption2 };
var MonitoringProjectsDashboardsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetSecurityOption3, _super);
    function MonitoringProjectsDashboardsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsGetSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsGetSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetSecurityOption3 };
var MonitoringProjectsDashboardsGetSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetSecurity, _super);
    function MonitoringProjectsDashboardsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsGetSecurityOption1)
    ], MonitoringProjectsDashboardsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsGetSecurityOption2)
    ], MonitoringProjectsDashboardsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsGetSecurityOption3)
    ], MonitoringProjectsDashboardsGetSecurity.prototype, "option3", void 0);
    return MonitoringProjectsDashboardsGetSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetSecurity };
var MonitoringProjectsDashboardsGetRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetRequest, _super);
    function MonitoringProjectsDashboardsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsGetPathParams)
    ], MonitoringProjectsDashboardsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsGetQueryParams)
    ], MonitoringProjectsDashboardsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsGetSecurity)
    ], MonitoringProjectsDashboardsGetRequest.prototype, "security", void 0);
    return MonitoringProjectsDashboardsGetRequest;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetRequest };
var MonitoringProjectsDashboardsGetResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsGetResponse, _super);
    function MonitoringProjectsDashboardsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dashboard)
    ], MonitoringProjectsDashboardsGetResponse.prototype, "dashboard", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsDashboardsGetResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsDashboardsGetResponse;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsGetResponse };

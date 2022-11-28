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
var MonitoringProjectsDashboardsDeletePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeletePathParams, _super);
    function MonitoringProjectsDashboardsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeletePathParams.prototype, "name", void 0);
    return MonitoringProjectsDashboardsDeletePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeletePathParams };
var MonitoringProjectsDashboardsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteQueryParams, _super);
    function MonitoringProjectsDashboardsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsDashboardsDeleteQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteQueryParams };
var MonitoringProjectsDashboardsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteSecurityOption1, _super);
    function MonitoringProjectsDashboardsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsDeleteSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteSecurityOption1 };
var MonitoringProjectsDashboardsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteSecurityOption2, _super);
    function MonitoringProjectsDashboardsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsDeleteSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteSecurityOption2 };
var MonitoringProjectsDashboardsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteSecurityOption3, _super);
    function MonitoringProjectsDashboardsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsDeleteSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteSecurityOption3 };
var MonitoringProjectsDashboardsDeleteSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteSecurity, _super);
    function MonitoringProjectsDashboardsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsDeleteSecurityOption1)
    ], MonitoringProjectsDashboardsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsDeleteSecurityOption2)
    ], MonitoringProjectsDashboardsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsDeleteSecurityOption3)
    ], MonitoringProjectsDashboardsDeleteSecurity.prototype, "option3", void 0);
    return MonitoringProjectsDashboardsDeleteSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteSecurity };
var MonitoringProjectsDashboardsDeleteRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteRequest, _super);
    function MonitoringProjectsDashboardsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsDeletePathParams)
    ], MonitoringProjectsDashboardsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsDeleteQueryParams)
    ], MonitoringProjectsDashboardsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsDeleteSecurity)
    ], MonitoringProjectsDashboardsDeleteRequest.prototype, "security", void 0);
    return MonitoringProjectsDashboardsDeleteRequest;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteRequest };
var MonitoringProjectsDashboardsDeleteResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsDeleteResponse, _super);
    function MonitoringProjectsDashboardsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MonitoringProjectsDashboardsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsDashboardsDeleteResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsDashboardsDeleteResponse;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsDeleteResponse };

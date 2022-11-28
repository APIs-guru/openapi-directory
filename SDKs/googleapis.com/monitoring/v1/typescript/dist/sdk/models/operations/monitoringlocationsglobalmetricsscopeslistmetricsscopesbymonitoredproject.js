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
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=monitoredResourceContainer" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "monitoredResourceContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams };
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1 };
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2 };
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3 };
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption1)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption2)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurityOption3)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity.prototype, "option3", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity };
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryParams)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectSecurity)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest.prototype, "security", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest };
var MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse, _super);
    function MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMetricsScopesByMonitoredProjectResponse)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse.prototype, "listMetricsScopesByMonitoredProjectResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse.prototype, "statusCode", void 0);
    return MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse };

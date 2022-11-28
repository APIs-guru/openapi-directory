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
var MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams.prototype, "parent", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1 };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2 };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3 };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption1)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption2)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurityOption3)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity.prototype, "option3", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesProjectsCreateQueryParams)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MonitoredProjectInput)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringLocationsGlobalMetricsScopesProjectsCreateSecurity)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest.prototype, "security", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest };
var MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse, _super);
    function MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse.prototype, "statusCode", void 0);
    return MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse;
}(SpeakeasyBase));
export { MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse };

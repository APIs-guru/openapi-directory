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
var MonitoringProjectsDashboardsPatchPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchPathParams, _super);
    function MonitoringProjectsDashboardsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchPathParams.prototype, "name", void 0);
    return MonitoringProjectsDashboardsPatchPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchPathParams };
var MonitoringProjectsDashboardsPatchQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchQueryParams, _super);
    function MonitoringProjectsDashboardsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsPatchQueryParams.prototype, "validateOnly", void 0);
    return MonitoringProjectsDashboardsPatchQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchQueryParams };
var MonitoringProjectsDashboardsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchSecurityOption1, _super);
    function MonitoringProjectsDashboardsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsPatchSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchSecurityOption1 };
var MonitoringProjectsDashboardsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchSecurityOption2, _super);
    function MonitoringProjectsDashboardsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsPatchSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchSecurityOption2 };
var MonitoringProjectsDashboardsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchSecurityOption3, _super);
    function MonitoringProjectsDashboardsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsPatchSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchSecurityOption3 };
var MonitoringProjectsDashboardsPatchSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchSecurity, _super);
    function MonitoringProjectsDashboardsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsPatchSecurityOption1)
    ], MonitoringProjectsDashboardsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsPatchSecurityOption2)
    ], MonitoringProjectsDashboardsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsPatchSecurityOption3)
    ], MonitoringProjectsDashboardsPatchSecurity.prototype, "option3", void 0);
    return MonitoringProjectsDashboardsPatchSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchSecurity };
var MonitoringProjectsDashboardsPatchRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchRequest, _super);
    function MonitoringProjectsDashboardsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsPatchPathParams)
    ], MonitoringProjectsDashboardsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsPatchQueryParams)
    ], MonitoringProjectsDashboardsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Dashboard)
    ], MonitoringProjectsDashboardsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsPatchSecurity)
    ], MonitoringProjectsDashboardsPatchRequest.prototype, "security", void 0);
    return MonitoringProjectsDashboardsPatchRequest;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchRequest };
var MonitoringProjectsDashboardsPatchResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsPatchResponse, _super);
    function MonitoringProjectsDashboardsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Dashboard)
    ], MonitoringProjectsDashboardsPatchResponse.prototype, "dashboard", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsDashboardsPatchResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsDashboardsPatchResponse;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsPatchResponse };

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
var MonitoringProjectsLocationPrometheusApiV1QueryPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryPathParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryPathParams.prototype, "name", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryPathParams };
var MonitoringProjectsLocationPrometheusApiV1QueryQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryQueryParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryQueryParams };
var MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1, _super);
    function MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1 };
var MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2, _super);
    function MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2 };
var MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3, _super);
    function MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3 };
var MonitoringProjectsLocationPrometheusApiV1QuerySecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QuerySecurity, _super);
    function MonitoringProjectsLocationPrometheusApiV1QuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3)
    ], MonitoringProjectsLocationPrometheusApiV1QuerySecurity.prototype, "option3", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QuerySecurity;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QuerySecurity };
var MonitoringProjectsLocationPrometheusApiV1QueryRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRequest, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryPathParams)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryQueryParams)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueryInstantRequest)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QuerySecurity)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRequest.prototype, "security", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRequest;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRequest };
var MonitoringProjectsLocationPrometheusApiV1QueryResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryResponse, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], MonitoringProjectsLocationPrometheusApiV1QueryResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsLocationPrometheusApiV1QueryResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryResponse;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryResponse };

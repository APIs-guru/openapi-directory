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
var MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams.prototype, "name", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1 };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2 };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3 };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity.prototype, "option3", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueryRangeRequest)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest.prototype, "security", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest };
var MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse, _super);
    function MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse };

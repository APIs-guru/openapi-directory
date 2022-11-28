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
var MonitoringProjectsLocationPrometheusApiV1SeriesPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesPathParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesPathParams.prototype, "name", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesPathParams };
var MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams };
var MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1 };
var MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2 };
var MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3 };
var MonitoringProjectsLocationPrometheusApiV1SeriesSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesSecurity, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesSecurity.prototype, "option3", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesSecurity };
var MonitoringProjectsLocationPrometheusApiV1SeriesRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesRequest, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1SeriesPathParams)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QuerySeriesRequest)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1SeriesSecurity)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesRequest.prototype, "security", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesRequest;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesRequest };
var MonitoringProjectsLocationPrometheusApiV1SeriesResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1SeriesResponse, _super);
    function MonitoringProjectsLocationPrometheusApiV1SeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsLocationPrometheusApiV1SeriesResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsLocationPrometheusApiV1SeriesResponse;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1SeriesResponse };

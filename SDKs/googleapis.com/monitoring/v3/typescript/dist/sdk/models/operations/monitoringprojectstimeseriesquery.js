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
var MonitoringProjectsTimeSeriesQueryPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQueryPathParams, _super);
    function MonitoringProjectsTimeSeriesQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryPathParams.prototype, "name", void 0);
    return MonitoringProjectsTimeSeriesQueryPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQueryPathParams };
var MonitoringProjectsTimeSeriesQueryQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQueryQueryParams, _super);
    function MonitoringProjectsTimeSeriesQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsTimeSeriesQueryQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQueryQueryParams };
var MonitoringProjectsTimeSeriesQuerySecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQuerySecurityOption1, _super);
    function MonitoringProjectsTimeSeriesQuerySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesQuerySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesQuerySecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesQuerySecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQuerySecurityOption1 };
var MonitoringProjectsTimeSeriesQuerySecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQuerySecurityOption2, _super);
    function MonitoringProjectsTimeSeriesQuerySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesQuerySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesQuerySecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesQuerySecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQuerySecurityOption2 };
var MonitoringProjectsTimeSeriesQuerySecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQuerySecurityOption3, _super);
    function MonitoringProjectsTimeSeriesQuerySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesQuerySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesQuerySecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesQuerySecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQuerySecurityOption3 };
var MonitoringProjectsTimeSeriesQuerySecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQuerySecurity, _super);
    function MonitoringProjectsTimeSeriesQuerySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesQuerySecurityOption1)
    ], MonitoringProjectsTimeSeriesQuerySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesQuerySecurityOption2)
    ], MonitoringProjectsTimeSeriesQuerySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesQuerySecurityOption3)
    ], MonitoringProjectsTimeSeriesQuerySecurity.prototype, "option3", void 0);
    return MonitoringProjectsTimeSeriesQuerySecurity;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQuerySecurity };
var MonitoringProjectsTimeSeriesQueryRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQueryRequest, _super);
    function MonitoringProjectsTimeSeriesQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesQueryPathParams)
    ], MonitoringProjectsTimeSeriesQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesQueryQueryParams)
    ], MonitoringProjectsTimeSeriesQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueryTimeSeriesRequest)
    ], MonitoringProjectsTimeSeriesQueryRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesQuerySecurity)
    ], MonitoringProjectsTimeSeriesQueryRequest.prototype, "security", void 0);
    return MonitoringProjectsTimeSeriesQueryRequest;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQueryRequest };
var MonitoringProjectsTimeSeriesQueryResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesQueryResponse, _super);
    function MonitoringProjectsTimeSeriesQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QueryTimeSeriesResponse)
    ], MonitoringProjectsTimeSeriesQueryResponse.prototype, "queryTimeSeriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsTimeSeriesQueryResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsTimeSeriesQueryResponse;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesQueryResponse };

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
var MonitoringProjectsTimeSeriesCreateServicePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServicePathParams, _super);
    function MonitoringProjectsTimeSeriesCreateServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServicePathParams.prototype, "name", void 0);
    return MonitoringProjectsTimeSeriesCreateServicePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServicePathParams };
var MonitoringProjectsTimeSeriesCreateServiceQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceQueryParams, _super);
    function MonitoringProjectsTimeSeriesCreateServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceQueryParams };
var MonitoringProjectsTimeSeriesCreateServiceSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceSecurityOption1, _super);
    function MonitoringProjectsTimeSeriesCreateServiceSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceSecurityOption1 };
var MonitoringProjectsTimeSeriesCreateServiceSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceSecurityOption2, _super);
    function MonitoringProjectsTimeSeriesCreateServiceSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceSecurityOption2 };
var MonitoringProjectsTimeSeriesCreateServiceSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceSecurityOption3, _super);
    function MonitoringProjectsTimeSeriesCreateServiceSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceSecurityOption3 };
var MonitoringProjectsTimeSeriesCreateServiceSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceSecurity, _super);
    function MonitoringProjectsTimeSeriesCreateServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateServiceSecurityOption1)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateServiceSecurityOption2)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateServiceSecurityOption3)
    ], MonitoringProjectsTimeSeriesCreateServiceSecurity.prototype, "option3", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceSecurity };
var MonitoringProjectsTimeSeriesCreateServiceRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceRequest, _super);
    function MonitoringProjectsTimeSeriesCreateServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateServicePathParams)
    ], MonitoringProjectsTimeSeriesCreateServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateServiceQueryParams)
    ], MonitoringProjectsTimeSeriesCreateServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateTimeSeriesRequest)
    ], MonitoringProjectsTimeSeriesCreateServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateServiceSecurity)
    ], MonitoringProjectsTimeSeriesCreateServiceRequest.prototype, "security", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceRequest;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceRequest };
var MonitoringProjectsTimeSeriesCreateServiceResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateServiceResponse, _super);
    function MonitoringProjectsTimeSeriesCreateServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MonitoringProjectsTimeSeriesCreateServiceResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsTimeSeriesCreateServiceResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsTimeSeriesCreateServiceResponse;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateServiceResponse };

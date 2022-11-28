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
var MonitoringProjectsTimeSeriesCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreatePathParams, _super);
    function MonitoringProjectsTimeSeriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreatePathParams.prototype, "name", void 0);
    return MonitoringProjectsTimeSeriesCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreatePathParams };
var MonitoringProjectsTimeSeriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateQueryParams, _super);
    function MonitoringProjectsTimeSeriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsTimeSeriesCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateQueryParams };
var MonitoringProjectsTimeSeriesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateSecurityOption1, _super);
    function MonitoringProjectsTimeSeriesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateSecurityOption1 };
var MonitoringProjectsTimeSeriesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateSecurityOption2, _super);
    function MonitoringProjectsTimeSeriesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateSecurityOption2 };
var MonitoringProjectsTimeSeriesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateSecurityOption3, _super);
    function MonitoringProjectsTimeSeriesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsTimeSeriesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsTimeSeriesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsTimeSeriesCreateSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateSecurityOption3 };
var MonitoringProjectsTimeSeriesCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateSecurity, _super);
    function MonitoringProjectsTimeSeriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateSecurityOption1)
    ], MonitoringProjectsTimeSeriesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateSecurityOption2)
    ], MonitoringProjectsTimeSeriesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateSecurityOption3)
    ], MonitoringProjectsTimeSeriesCreateSecurity.prototype, "option3", void 0);
    return MonitoringProjectsTimeSeriesCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateSecurity };
var MonitoringProjectsTimeSeriesCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateRequest, _super);
    function MonitoringProjectsTimeSeriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreatePathParams)
    ], MonitoringProjectsTimeSeriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateQueryParams)
    ], MonitoringProjectsTimeSeriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateTimeSeriesRequest)
    ], MonitoringProjectsTimeSeriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsTimeSeriesCreateSecurity)
    ], MonitoringProjectsTimeSeriesCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsTimeSeriesCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateRequest };
var MonitoringProjectsTimeSeriesCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsTimeSeriesCreateResponse, _super);
    function MonitoringProjectsTimeSeriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsTimeSeriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MonitoringProjectsTimeSeriesCreateResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsTimeSeriesCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsTimeSeriesCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsTimeSeriesCreateResponse };

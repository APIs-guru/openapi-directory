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
var MonitoringProjectsCollectdTimeSeriesCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreatePathParams, _super);
    function MonitoringProjectsCollectdTimeSeriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreatePathParams.prototype, "name", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreatePathParams };
var MonitoringProjectsCollectdTimeSeriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateQueryParams, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateQueryParams };
var MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1 };
var MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2 };
var MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3 };
var MonitoringProjectsCollectdTimeSeriesCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateSecurity, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3)
    ], MonitoringProjectsCollectdTimeSeriesCreateSecurity.prototype, "option3", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateSecurity };
var MonitoringProjectsCollectdTimeSeriesCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateRequest, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsCollectdTimeSeriesCreatePathParams)
    ], MonitoringProjectsCollectdTimeSeriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsCollectdTimeSeriesCreateQueryParams)
    ], MonitoringProjectsCollectdTimeSeriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateCollectdTimeSeriesRequest)
    ], MonitoringProjectsCollectdTimeSeriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsCollectdTimeSeriesCreateSecurity)
    ], MonitoringProjectsCollectdTimeSeriesCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateRequest };
var MonitoringProjectsCollectdTimeSeriesCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsCollectdTimeSeriesCreateResponse, _super);
    function MonitoringProjectsCollectdTimeSeriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsCollectdTimeSeriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCollectdTimeSeriesResponse)
    ], MonitoringProjectsCollectdTimeSeriesCreateResponse.prototype, "createCollectdTimeSeriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsCollectdTimeSeriesCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsCollectdTimeSeriesCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsCollectdTimeSeriesCreateResponse };

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
var MonitoringProjectsMetricDescriptorsCreatePathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreatePathParams, _super);
    function MonitoringProjectsMetricDescriptorsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreatePathParams.prototype, "name", void 0);
    return MonitoringProjectsMetricDescriptorsCreatePathParams;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreatePathParams };
var MonitoringProjectsMetricDescriptorsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateQueryParams, _super);
    function MonitoringProjectsMetricDescriptorsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsMetricDescriptorsCreateQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateQueryParams };
var MonitoringProjectsMetricDescriptorsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateSecurityOption1, _super);
    function MonitoringProjectsMetricDescriptorsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsCreateSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateSecurityOption1 };
var MonitoringProjectsMetricDescriptorsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateSecurityOption2, _super);
    function MonitoringProjectsMetricDescriptorsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsCreateSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateSecurityOption2 };
var MonitoringProjectsMetricDescriptorsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateSecurityOption3, _super);
    function MonitoringProjectsMetricDescriptorsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsCreateSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateSecurityOption3 };
var MonitoringProjectsMetricDescriptorsCreateSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateSecurity, _super);
    function MonitoringProjectsMetricDescriptorsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsCreateSecurityOption1)
    ], MonitoringProjectsMetricDescriptorsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsCreateSecurityOption2)
    ], MonitoringProjectsMetricDescriptorsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsCreateSecurityOption3)
    ], MonitoringProjectsMetricDescriptorsCreateSecurity.prototype, "option3", void 0);
    return MonitoringProjectsMetricDescriptorsCreateSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateSecurity };
var MonitoringProjectsMetricDescriptorsCreateRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateRequest, _super);
    function MonitoringProjectsMetricDescriptorsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsCreatePathParams)
    ], MonitoringProjectsMetricDescriptorsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsCreateQueryParams)
    ], MonitoringProjectsMetricDescriptorsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MetricDescriptor)
    ], MonitoringProjectsMetricDescriptorsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsCreateSecurity)
    ], MonitoringProjectsMetricDescriptorsCreateRequest.prototype, "security", void 0);
    return MonitoringProjectsMetricDescriptorsCreateRequest;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateRequest };
var MonitoringProjectsMetricDescriptorsCreateResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsCreateResponse, _super);
    function MonitoringProjectsMetricDescriptorsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MetricDescriptor)
    ], MonitoringProjectsMetricDescriptorsCreateResponse.prototype, "metricDescriptor", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsMetricDescriptorsCreateResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsMetricDescriptorsCreateResponse;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsCreateResponse };

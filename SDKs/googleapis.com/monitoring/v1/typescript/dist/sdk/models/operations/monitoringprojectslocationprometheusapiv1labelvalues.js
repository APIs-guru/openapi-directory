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
var MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams.prototype, "name", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1 };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2 };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3 };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity.prototype, "option3", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest.prototype, "security", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest };
var MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse };

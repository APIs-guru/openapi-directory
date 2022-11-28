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
var MonitoringProjectsLocationPrometheusApiV1LabelsPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsPathParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsPathParams.prototype, "name", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsPathParams };
var MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams };
var MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1 };
var MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2 };
var MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3 };
var MonitoringProjectsLocationPrometheusApiV1LabelsSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsSecurity, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsSecurity.prototype, "option3", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsSecurity };
var MonitoringProjectsLocationPrometheusApiV1LabelsRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsRequest, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsPathParams)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListLabelsRequest)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsSecurity)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsRequest.prototype, "security", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsRequest;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsRequest };
var MonitoringProjectsLocationPrometheusApiV1LabelsResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsResponse, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsResponse;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsResponse };

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
var MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams.prototype, "name", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams };
var MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=match" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "match", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams };
var MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1 };
var MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2 };
var MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3 };
var MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity };
var MonitoringProjectsLocationPrometheusApiV1LabelsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListRequest, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListRequest.prototype, "security", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListRequest };
var MonitoringProjectsLocationPrometheusApiV1LabelsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsLocationPrometheusApiV1LabelsListResponse, _super);
    function MonitoringProjectsLocationPrometheusApiV1LabelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsLocationPrometheusApiV1LabelsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsLocationPrometheusApiV1LabelsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsLocationPrometheusApiV1LabelsListResponse };

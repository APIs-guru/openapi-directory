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
var MonitoringProjectsMetricDescriptorsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListPathParams, _super);
    function MonitoringProjectsMetricDescriptorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListPathParams.prototype, "name", void 0);
    return MonitoringProjectsMetricDescriptorsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListPathParams };
var MonitoringProjectsMetricDescriptorsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListQueryParams, _super);
    function MonitoringProjectsMetricDescriptorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsMetricDescriptorsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListQueryParams };
var MonitoringProjectsMetricDescriptorsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListSecurityOption1, _super);
    function MonitoringProjectsMetricDescriptorsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListSecurityOption1 };
var MonitoringProjectsMetricDescriptorsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListSecurityOption2, _super);
    function MonitoringProjectsMetricDescriptorsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListSecurityOption2 };
var MonitoringProjectsMetricDescriptorsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListSecurityOption3, _super);
    function MonitoringProjectsMetricDescriptorsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListSecurityOption3 };
var MonitoringProjectsMetricDescriptorsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListSecurityOption4, _super);
    function MonitoringProjectsMetricDescriptorsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMetricDescriptorsListSecurityOption4.prototype, "oauth2c", void 0);
    return MonitoringProjectsMetricDescriptorsListSecurityOption4;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListSecurityOption4 };
var MonitoringProjectsMetricDescriptorsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListSecurity, _super);
    function MonitoringProjectsMetricDescriptorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListSecurityOption1)
    ], MonitoringProjectsMetricDescriptorsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListSecurityOption2)
    ], MonitoringProjectsMetricDescriptorsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListSecurityOption3)
    ], MonitoringProjectsMetricDescriptorsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListSecurityOption4)
    ], MonitoringProjectsMetricDescriptorsListSecurity.prototype, "option4", void 0);
    return MonitoringProjectsMetricDescriptorsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListSecurity };
var MonitoringProjectsMetricDescriptorsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListRequest, _super);
    function MonitoringProjectsMetricDescriptorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListPathParams)
    ], MonitoringProjectsMetricDescriptorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListQueryParams)
    ], MonitoringProjectsMetricDescriptorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMetricDescriptorsListSecurity)
    ], MonitoringProjectsMetricDescriptorsListRequest.prototype, "security", void 0);
    return MonitoringProjectsMetricDescriptorsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListRequest };
var MonitoringProjectsMetricDescriptorsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMetricDescriptorsListResponse, _super);
    function MonitoringProjectsMetricDescriptorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsMetricDescriptorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMetricDescriptorsResponse)
    ], MonitoringProjectsMetricDescriptorsListResponse.prototype, "listMetricDescriptorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsMetricDescriptorsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsMetricDescriptorsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsMetricDescriptorsListResponse };

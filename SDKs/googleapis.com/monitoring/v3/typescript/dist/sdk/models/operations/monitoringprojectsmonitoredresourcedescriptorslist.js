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
var MonitoringProjectsMonitoredResourceDescriptorsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListPathParams, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListPathParams.prototype, "name", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListPathParams };
var MonitoringProjectsMonitoredResourceDescriptorsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListQueryParams, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListQueryParams };
var MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1 };
var MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2 };
var MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3 };
var MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4.prototype, "oauth2c", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4 };
var MonitoringProjectsMonitoredResourceDescriptorsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListSecurity, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4)
    ], MonitoringProjectsMonitoredResourceDescriptorsListSecurity.prototype, "option4", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListSecurity };
var MonitoringProjectsMonitoredResourceDescriptorsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListRequest, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListPathParams)
    ], MonitoringProjectsMonitoredResourceDescriptorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListQueryParams)
    ], MonitoringProjectsMonitoredResourceDescriptorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsMonitoredResourceDescriptorsListSecurity)
    ], MonitoringProjectsMonitoredResourceDescriptorsListRequest.prototype, "security", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListRequest };
var MonitoringProjectsMonitoredResourceDescriptorsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsMonitoredResourceDescriptorsListResponse, _super);
    function MonitoringProjectsMonitoredResourceDescriptorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsMonitoredResourceDescriptorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMonitoredResourceDescriptorsResponse)
    ], MonitoringProjectsMonitoredResourceDescriptorsListResponse.prototype, "listMonitoredResourceDescriptorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsMonitoredResourceDescriptorsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsMonitoredResourceDescriptorsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsMonitoredResourceDescriptorsListResponse };

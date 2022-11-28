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
var MonitoringProjectsUptimeCheckConfigsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListPathParams, _super);
    function MonitoringProjectsUptimeCheckConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListPathParams.prototype, "parent", void 0);
    return MonitoringProjectsUptimeCheckConfigsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListPathParams };
var MonitoringProjectsUptimeCheckConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListQueryParams, _super);
    function MonitoringProjectsUptimeCheckConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsUptimeCheckConfigsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListQueryParams };
var MonitoringProjectsUptimeCheckConfigsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListSecurityOption1, _super);
    function MonitoringProjectsUptimeCheckConfigsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsUptimeCheckConfigsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsUptimeCheckConfigsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsUptimeCheckConfigsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListSecurityOption1 };
var MonitoringProjectsUptimeCheckConfigsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListSecurityOption2, _super);
    function MonitoringProjectsUptimeCheckConfigsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsUptimeCheckConfigsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsUptimeCheckConfigsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsUptimeCheckConfigsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListSecurityOption2 };
var MonitoringProjectsUptimeCheckConfigsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListSecurityOption3, _super);
    function MonitoringProjectsUptimeCheckConfigsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsUptimeCheckConfigsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsUptimeCheckConfigsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsUptimeCheckConfigsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListSecurityOption3 };
var MonitoringProjectsUptimeCheckConfigsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListSecurity, _super);
    function MonitoringProjectsUptimeCheckConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsListSecurityOption1)
    ], MonitoringProjectsUptimeCheckConfigsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsListSecurityOption2)
    ], MonitoringProjectsUptimeCheckConfigsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsListSecurityOption3)
    ], MonitoringProjectsUptimeCheckConfigsListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsUptimeCheckConfigsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListSecurity };
var MonitoringProjectsUptimeCheckConfigsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListRequest, _super);
    function MonitoringProjectsUptimeCheckConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsListPathParams)
    ], MonitoringProjectsUptimeCheckConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsListQueryParams)
    ], MonitoringProjectsUptimeCheckConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsUptimeCheckConfigsListSecurity)
    ], MonitoringProjectsUptimeCheckConfigsListRequest.prototype, "security", void 0);
    return MonitoringProjectsUptimeCheckConfigsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListRequest };
var MonitoringProjectsUptimeCheckConfigsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsUptimeCheckConfigsListResponse, _super);
    function MonitoringProjectsUptimeCheckConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsUptimeCheckConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUptimeCheckConfigsResponse)
    ], MonitoringProjectsUptimeCheckConfigsListResponse.prototype, "listUptimeCheckConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsUptimeCheckConfigsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsUptimeCheckConfigsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsUptimeCheckConfigsListResponse };

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
var MonitoringProjectsDashboardsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListPathParams, _super);
    function MonitoringProjectsDashboardsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListPathParams.prototype, "parent", void 0);
    return MonitoringProjectsDashboardsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListPathParams };
var MonitoringProjectsDashboardsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListQueryParams, _super);
    function MonitoringProjectsDashboardsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsDashboardsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListQueryParams };
var MonitoringProjectsDashboardsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListSecurityOption1, _super);
    function MonitoringProjectsDashboardsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListSecurityOption1 };
var MonitoringProjectsDashboardsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListSecurityOption2, _super);
    function MonitoringProjectsDashboardsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListSecurityOption2 };
var MonitoringProjectsDashboardsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListSecurityOption3, _super);
    function MonitoringProjectsDashboardsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsDashboardsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsDashboardsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsDashboardsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListSecurityOption3 };
var MonitoringProjectsDashboardsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListSecurity, _super);
    function MonitoringProjectsDashboardsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsListSecurityOption1)
    ], MonitoringProjectsDashboardsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsListSecurityOption2)
    ], MonitoringProjectsDashboardsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsDashboardsListSecurityOption3)
    ], MonitoringProjectsDashboardsListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsDashboardsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListSecurity };
var MonitoringProjectsDashboardsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListRequest, _super);
    function MonitoringProjectsDashboardsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsListPathParams)
    ], MonitoringProjectsDashboardsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsListQueryParams)
    ], MonitoringProjectsDashboardsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsDashboardsListSecurity)
    ], MonitoringProjectsDashboardsListRequest.prototype, "security", void 0);
    return MonitoringProjectsDashboardsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListRequest };
var MonitoringProjectsDashboardsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsDashboardsListResponse, _super);
    function MonitoringProjectsDashboardsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsDashboardsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDashboardsResponse)
    ], MonitoringProjectsDashboardsListResponse.prototype, "listDashboardsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsDashboardsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsDashboardsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsDashboardsListResponse };

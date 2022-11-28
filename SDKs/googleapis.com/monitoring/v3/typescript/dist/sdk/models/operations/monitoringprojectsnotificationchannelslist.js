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
var MonitoringProjectsNotificationChannelsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListPathParams, _super);
    function MonitoringProjectsNotificationChannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListPathParams.prototype, "name", void 0);
    return MonitoringProjectsNotificationChannelsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListPathParams };
var MonitoringProjectsNotificationChannelsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListQueryParams, _super);
    function MonitoringProjectsNotificationChannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsNotificationChannelsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListQueryParams };
var MonitoringProjectsNotificationChannelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListSecurityOption1, _super);
    function MonitoringProjectsNotificationChannelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListSecurityOption1 };
var MonitoringProjectsNotificationChannelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListSecurityOption2, _super);
    function MonitoringProjectsNotificationChannelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListSecurityOption2 };
var MonitoringProjectsNotificationChannelsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListSecurityOption3, _super);
    function MonitoringProjectsNotificationChannelsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListSecurityOption3 };
var MonitoringProjectsNotificationChannelsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListSecurity, _super);
    function MonitoringProjectsNotificationChannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsListSecurityOption1)
    ], MonitoringProjectsNotificationChannelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsListSecurityOption2)
    ], MonitoringProjectsNotificationChannelsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelsListSecurityOption3)
    ], MonitoringProjectsNotificationChannelsListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsNotificationChannelsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListSecurity };
var MonitoringProjectsNotificationChannelsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListRequest, _super);
    function MonitoringProjectsNotificationChannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsListPathParams)
    ], MonitoringProjectsNotificationChannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsListQueryParams)
    ], MonitoringProjectsNotificationChannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelsListSecurity)
    ], MonitoringProjectsNotificationChannelsListRequest.prototype, "security", void 0);
    return MonitoringProjectsNotificationChannelsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListRequest };
var MonitoringProjectsNotificationChannelsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelsListResponse, _super);
    function MonitoringProjectsNotificationChannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNotificationChannelsResponse)
    ], MonitoringProjectsNotificationChannelsListResponse.prototype, "listNotificationChannelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsNotificationChannelsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelsListResponse };

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
var MonitoringProjectsNotificationChannelDescriptorsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListPathParams, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListPathParams.prototype, "name", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListPathParams };
var MonitoringProjectsNotificationChannelDescriptorsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListQueryParams, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListQueryParams };
var MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1 };
var MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2 };
var MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3 };
var MonitoringProjectsNotificationChannelDescriptorsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListSecurity, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3)
    ], MonitoringProjectsNotificationChannelDescriptorsListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListSecurity };
var MonitoringProjectsNotificationChannelDescriptorsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListRequest, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelDescriptorsListPathParams)
    ], MonitoringProjectsNotificationChannelDescriptorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelDescriptorsListQueryParams)
    ], MonitoringProjectsNotificationChannelDescriptorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsNotificationChannelDescriptorsListSecurity)
    ], MonitoringProjectsNotificationChannelDescriptorsListRequest.prototype, "security", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListRequest };
var MonitoringProjectsNotificationChannelDescriptorsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsNotificationChannelDescriptorsListResponse, _super);
    function MonitoringProjectsNotificationChannelDescriptorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsNotificationChannelDescriptorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListNotificationChannelDescriptorsResponse)
    ], MonitoringProjectsNotificationChannelDescriptorsListResponse.prototype, "listNotificationChannelDescriptorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsNotificationChannelDescriptorsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsNotificationChannelDescriptorsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsNotificationChannelDescriptorsListResponse };

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
var LoggingMonitoredResourceDescriptorsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListQueryParams, _super);
    function LoggingMonitoredResourceDescriptorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingMonitoredResourceDescriptorsListQueryParams;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListQueryParams };
var LoggingMonitoredResourceDescriptorsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListSecurityOption1, _super);
    function LoggingMonitoredResourceDescriptorsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingMonitoredResourceDescriptorsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListSecurityOption1 };
var LoggingMonitoredResourceDescriptorsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListSecurityOption2, _super);
    function LoggingMonitoredResourceDescriptorsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingMonitoredResourceDescriptorsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListSecurityOption2 };
var LoggingMonitoredResourceDescriptorsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListSecurityOption3, _super);
    function LoggingMonitoredResourceDescriptorsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingMonitoredResourceDescriptorsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListSecurityOption3 };
var LoggingMonitoredResourceDescriptorsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListSecurityOption4, _super);
    function LoggingMonitoredResourceDescriptorsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingMonitoredResourceDescriptorsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingMonitoredResourceDescriptorsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListSecurityOption4 };
var LoggingMonitoredResourceDescriptorsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListSecurity, _super);
    function LoggingMonitoredResourceDescriptorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingMonitoredResourceDescriptorsListSecurityOption1)
    ], LoggingMonitoredResourceDescriptorsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingMonitoredResourceDescriptorsListSecurityOption2)
    ], LoggingMonitoredResourceDescriptorsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingMonitoredResourceDescriptorsListSecurityOption3)
    ], LoggingMonitoredResourceDescriptorsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingMonitoredResourceDescriptorsListSecurityOption4)
    ], LoggingMonitoredResourceDescriptorsListSecurity.prototype, "option4", void 0);
    return LoggingMonitoredResourceDescriptorsListSecurity;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListSecurity };
var LoggingMonitoredResourceDescriptorsListRequest = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListRequest, _super);
    function LoggingMonitoredResourceDescriptorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingMonitoredResourceDescriptorsListQueryParams)
    ], LoggingMonitoredResourceDescriptorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingMonitoredResourceDescriptorsListSecurity)
    ], LoggingMonitoredResourceDescriptorsListRequest.prototype, "security", void 0);
    return LoggingMonitoredResourceDescriptorsListRequest;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListRequest };
var LoggingMonitoredResourceDescriptorsListResponse = /** @class */ (function (_super) {
    __extends(LoggingMonitoredResourceDescriptorsListResponse, _super);
    function LoggingMonitoredResourceDescriptorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingMonitoredResourceDescriptorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMonitoredResourceDescriptorsResponse)
    ], LoggingMonitoredResourceDescriptorsListResponse.prototype, "listMonitoredResourceDescriptorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingMonitoredResourceDescriptorsListResponse.prototype, "statusCode", void 0);
    return LoggingMonitoredResourceDescriptorsListResponse;
}(SpeakeasyBase));
export { LoggingMonitoredResourceDescriptorsListResponse };

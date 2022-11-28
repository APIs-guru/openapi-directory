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
var CloudsearchSettingsSearchapplicationsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListQueryParams, _super);
    function CloudsearchSettingsSearchapplicationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsSearchapplicationsListQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListQueryParams };
var CloudsearchSettingsSearchapplicationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListSecurityOption1, _super);
    function CloudsearchSettingsSearchapplicationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsListSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListSecurityOption1 };
var CloudsearchSettingsSearchapplicationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListSecurityOption2, _super);
    function CloudsearchSettingsSearchapplicationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsListSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListSecurityOption2 };
var CloudsearchSettingsSearchapplicationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListSecurityOption3, _super);
    function CloudsearchSettingsSearchapplicationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsSearchapplicationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsSearchapplicationsListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsSearchapplicationsListSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListSecurityOption3 };
var CloudsearchSettingsSearchapplicationsListSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListSecurity, _super);
    function CloudsearchSettingsSearchapplicationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsListSecurityOption1)
    ], CloudsearchSettingsSearchapplicationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsListSecurityOption2)
    ], CloudsearchSettingsSearchapplicationsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsListSecurityOption3)
    ], CloudsearchSettingsSearchapplicationsListSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsSearchapplicationsListSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListSecurity };
var CloudsearchSettingsSearchapplicationsListRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListRequest, _super);
    function CloudsearchSettingsSearchapplicationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsListQueryParams)
    ], CloudsearchSettingsSearchapplicationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsSearchapplicationsListSecurity)
    ], CloudsearchSettingsSearchapplicationsListRequest.prototype, "security", void 0);
    return CloudsearchSettingsSearchapplicationsListRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListRequest };
var CloudsearchSettingsSearchapplicationsListResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsSearchapplicationsListResponse, _super);
    function CloudsearchSettingsSearchapplicationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsSearchapplicationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSearchApplicationsResponse)
    ], CloudsearchSettingsSearchapplicationsListResponse.prototype, "listSearchApplicationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsSearchapplicationsListResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsSearchapplicationsListResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsSearchapplicationsListResponse };

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
var CloudsearchSettingsDatasourcesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListQueryParams, _super);
    function CloudsearchSettingsDatasourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsDatasourcesListQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListQueryParams };
var CloudsearchSettingsDatasourcesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListSecurityOption1, _super);
    function CloudsearchSettingsDatasourcesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsDatasourcesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsDatasourcesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsDatasourcesListSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListSecurityOption1 };
var CloudsearchSettingsDatasourcesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListSecurityOption2, _super);
    function CloudsearchSettingsDatasourcesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsDatasourcesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsDatasourcesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsDatasourcesListSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListSecurityOption2 };
var CloudsearchSettingsDatasourcesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListSecurityOption3, _super);
    function CloudsearchSettingsDatasourcesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsDatasourcesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsDatasourcesListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsDatasourcesListSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListSecurityOption3 };
var CloudsearchSettingsDatasourcesListSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListSecurity, _super);
    function CloudsearchSettingsDatasourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsDatasourcesListSecurityOption1)
    ], CloudsearchSettingsDatasourcesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsDatasourcesListSecurityOption2)
    ], CloudsearchSettingsDatasourcesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsDatasourcesListSecurityOption3)
    ], CloudsearchSettingsDatasourcesListSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsDatasourcesListSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListSecurity };
var CloudsearchSettingsDatasourcesListRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListRequest, _super);
    function CloudsearchSettingsDatasourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsDatasourcesListQueryParams)
    ], CloudsearchSettingsDatasourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsDatasourcesListSecurity)
    ], CloudsearchSettingsDatasourcesListRequest.prototype, "security", void 0);
    return CloudsearchSettingsDatasourcesListRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListRequest };
var CloudsearchSettingsDatasourcesListResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsDatasourcesListResponse, _super);
    function CloudsearchSettingsDatasourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsDatasourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDataSourceResponse)
    ], CloudsearchSettingsDatasourcesListResponse.prototype, "listDataSourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsDatasourcesListResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsDatasourcesListResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsDatasourcesListResponse };

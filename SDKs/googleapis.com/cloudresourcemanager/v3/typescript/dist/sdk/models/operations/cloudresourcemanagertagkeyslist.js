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
var CloudresourcemanagerTagKeysListQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagKeysListQueryParams, _super);
    function CloudresourcemanagerTagKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagKeysListQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagKeysListQueryParams };
var CloudresourcemanagerTagKeysListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagKeysListSecurityOption1, _super);
    function CloudresourcemanagerTagKeysListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagKeysListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagKeysListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagKeysListSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerTagKeysListSecurityOption1 };
var CloudresourcemanagerTagKeysListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagKeysListSecurityOption2, _super);
    function CloudresourcemanagerTagKeysListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagKeysListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagKeysListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagKeysListSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerTagKeysListSecurityOption2 };
var CloudresourcemanagerTagKeysListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagKeysListSecurity, _super);
    function CloudresourcemanagerTagKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagKeysListSecurityOption1)
    ], CloudresourcemanagerTagKeysListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagKeysListSecurityOption2)
    ], CloudresourcemanagerTagKeysListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerTagKeysListSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagKeysListSecurity };
var CloudresourcemanagerTagKeysListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagKeysListRequest, _super);
    function CloudresourcemanagerTagKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagKeysListQueryParams)
    ], CloudresourcemanagerTagKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagKeysListSecurity)
    ], CloudresourcemanagerTagKeysListRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagKeysListRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagKeysListRequest };
var CloudresourcemanagerTagKeysListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagKeysListResponse, _super);
    function CloudresourcemanagerTagKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTagKeysResponse)
    ], CloudresourcemanagerTagKeysListResponse.prototype, "listTagKeysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagKeysListResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerTagKeysListResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagKeysListResponse };

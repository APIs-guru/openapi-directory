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
var CloudresourcemanagerTagBindingsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagBindingsListQueryParams, _super);
    function CloudresourcemanagerTagBindingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagBindingsListQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagBindingsListQueryParams };
var CloudresourcemanagerTagBindingsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagBindingsListSecurityOption1, _super);
    function CloudresourcemanagerTagBindingsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagBindingsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagBindingsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagBindingsListSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerTagBindingsListSecurityOption1 };
var CloudresourcemanagerTagBindingsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagBindingsListSecurityOption2, _super);
    function CloudresourcemanagerTagBindingsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagBindingsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagBindingsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagBindingsListSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerTagBindingsListSecurityOption2 };
var CloudresourcemanagerTagBindingsListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagBindingsListSecurity, _super);
    function CloudresourcemanagerTagBindingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagBindingsListSecurityOption1)
    ], CloudresourcemanagerTagBindingsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagBindingsListSecurityOption2)
    ], CloudresourcemanagerTagBindingsListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerTagBindingsListSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagBindingsListSecurity };
var CloudresourcemanagerTagBindingsListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagBindingsListRequest, _super);
    function CloudresourcemanagerTagBindingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagBindingsListQueryParams)
    ], CloudresourcemanagerTagBindingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagBindingsListSecurity)
    ], CloudresourcemanagerTagBindingsListRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagBindingsListRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagBindingsListRequest };
var CloudresourcemanagerTagBindingsListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagBindingsListResponse, _super);
    function CloudresourcemanagerTagBindingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagBindingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTagBindingsResponse)
    ], CloudresourcemanagerTagBindingsListResponse.prototype, "listTagBindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagBindingsListResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerTagBindingsListResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagBindingsListResponse };

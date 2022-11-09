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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var VaultMattersListStateEnum;
(function (VaultMattersListStateEnum) {
    VaultMattersListStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    VaultMattersListStateEnum["Open"] = "OPEN";
    VaultMattersListStateEnum["Closed"] = "CLOSED";
    VaultMattersListStateEnum["Deleted"] = "DELETED";
})(VaultMattersListStateEnum || (VaultMattersListStateEnum = {}));
export var VaultMattersListViewEnum;
(function (VaultMattersListViewEnum) {
    VaultMattersListViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    VaultMattersListViewEnum["Basic"] = "BASIC";
    VaultMattersListViewEnum["Full"] = "FULL";
})(VaultMattersListViewEnum || (VaultMattersListViewEnum = {}));
var VaultMattersListQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersListQueryParams, _super);
    function VaultMattersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VaultMattersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], VaultMattersListQueryParams.prototype, "view", void 0);
    return VaultMattersListQueryParams;
}(SpeakeasyBase));
export { VaultMattersListQueryParams };
var VaultMattersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersListSecurityOption1, _super);
    function VaultMattersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersListSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersListSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersListSecurityOption1 };
var VaultMattersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersListSecurityOption2, _super);
    function VaultMattersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersListSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersListSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersListSecurityOption2 };
var VaultMattersListSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersListSecurity, _super);
    function VaultMattersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersListSecurityOption1)
    ], VaultMattersListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersListSecurityOption2)
    ], VaultMattersListSecurity.prototype, "option2", void 0);
    return VaultMattersListSecurity;
}(SpeakeasyBase));
export { VaultMattersListSecurity };
var VaultMattersListRequest = /** @class */ (function (_super) {
    __extends(VaultMattersListRequest, _super);
    function VaultMattersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersListQueryParams)
    ], VaultMattersListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersListSecurity)
    ], VaultMattersListRequest.prototype, "security", void 0);
    return VaultMattersListRequest;
}(SpeakeasyBase));
export { VaultMattersListRequest };
var VaultMattersListResponse = /** @class */ (function (_super) {
    __extends(VaultMattersListResponse, _super);
    function VaultMattersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VaultMattersListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListMattersResponse)
    ], VaultMattersListResponse.prototype, "listMattersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VaultMattersListResponse.prototype, "statusCode", void 0);
    return VaultMattersListResponse;
}(SpeakeasyBase));
export { VaultMattersListResponse };

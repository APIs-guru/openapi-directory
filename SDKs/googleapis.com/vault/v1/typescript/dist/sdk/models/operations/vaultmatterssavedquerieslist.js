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
var VaultMattersSavedQueriesListPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListPathParams, _super);
    function VaultMattersSavedQueriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListPathParams.prototype, "matterId", void 0);
    return VaultMattersSavedQueriesListPathParams;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListPathParams };
var VaultMattersSavedQueriesListQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListQueryParams, _super);
    function VaultMattersSavedQueriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersSavedQueriesListQueryParams;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListQueryParams };
var VaultMattersSavedQueriesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListSecurityOption1, _super);
    function VaultMattersSavedQueriesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersSavedQueriesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersSavedQueriesListSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersSavedQueriesListSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListSecurityOption1 };
var VaultMattersSavedQueriesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListSecurityOption2, _super);
    function VaultMattersSavedQueriesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersSavedQueriesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersSavedQueriesListSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersSavedQueriesListSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListSecurityOption2 };
var VaultMattersSavedQueriesListSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListSecurity, _super);
    function VaultMattersSavedQueriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersSavedQueriesListSecurityOption1)
    ], VaultMattersSavedQueriesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersSavedQueriesListSecurityOption2)
    ], VaultMattersSavedQueriesListSecurity.prototype, "option2", void 0);
    return VaultMattersSavedQueriesListSecurity;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListSecurity };
var VaultMattersSavedQueriesListRequest = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListRequest, _super);
    function VaultMattersSavedQueriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesListPathParams)
    ], VaultMattersSavedQueriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesListQueryParams)
    ], VaultMattersSavedQueriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesListSecurity)
    ], VaultMattersSavedQueriesListRequest.prototype, "security", void 0);
    return VaultMattersSavedQueriesListRequest;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListRequest };
var VaultMattersSavedQueriesListResponse = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesListResponse, _super);
    function VaultMattersSavedQueriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSavedQueriesResponse)
    ], VaultMattersSavedQueriesListResponse.prototype, "listSavedQueriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersSavedQueriesListResponse.prototype, "statusCode", void 0);
    return VaultMattersSavedQueriesListResponse;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesListResponse };

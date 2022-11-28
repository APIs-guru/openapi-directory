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
var VaultMattersSavedQueriesCreatePathParams = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesCreatePathParams, _super);
    function VaultMattersSavedQueriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreatePathParams.prototype, "matterId", void 0);
    return VaultMattersSavedQueriesCreatePathParams;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesCreatePathParams };
var VaultMattersSavedQueriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesCreateQueryParams, _super);
    function VaultMattersSavedQueriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersSavedQueriesCreateQueryParams;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesCreateQueryParams };
var VaultMattersSavedQueriesCreateSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesCreateSecurity, _super);
    function VaultMattersSavedQueriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersSavedQueriesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersSavedQueriesCreateSecurity.prototype, "oauth2c", void 0);
    return VaultMattersSavedQueriesCreateSecurity;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesCreateSecurity };
var VaultMattersSavedQueriesCreateRequest = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesCreateRequest, _super);
    function VaultMattersSavedQueriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesCreatePathParams)
    ], VaultMattersSavedQueriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesCreateQueryParams)
    ], VaultMattersSavedQueriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SavedQuery)
    ], VaultMattersSavedQueriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesCreateSecurity)
    ], VaultMattersSavedQueriesCreateRequest.prototype, "security", void 0);
    return VaultMattersSavedQueriesCreateRequest;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesCreateRequest };
var VaultMattersSavedQueriesCreateResponse = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesCreateResponse, _super);
    function VaultMattersSavedQueriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedQuery)
    ], VaultMattersSavedQueriesCreateResponse.prototype, "savedQuery", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersSavedQueriesCreateResponse.prototype, "statusCode", void 0);
    return VaultMattersSavedQueriesCreateResponse;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesCreateResponse };

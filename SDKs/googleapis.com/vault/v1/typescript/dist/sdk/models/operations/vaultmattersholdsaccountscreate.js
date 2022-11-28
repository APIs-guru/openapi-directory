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
var VaultMattersHoldsAccountsCreatePathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsCreatePathParams, _super);
    function VaultMattersHoldsAccountsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holdId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreatePathParams.prototype, "holdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreatePathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsAccountsCreatePathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsCreatePathParams };
var VaultMattersHoldsAccountsCreateQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsCreateQueryParams, _super);
    function VaultMattersHoldsAccountsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersHoldsAccountsCreateQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsCreateQueryParams };
var VaultMattersHoldsAccountsCreateSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsCreateSecurity, _super);
    function VaultMattersHoldsAccountsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsAccountsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsAccountsCreateSecurity.prototype, "oauth2c", void 0);
    return VaultMattersHoldsAccountsCreateSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsCreateSecurity };
var VaultMattersHoldsAccountsCreateRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsCreateRequest, _super);
    function VaultMattersHoldsAccountsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsAccountsCreatePathParams)
    ], VaultMattersHoldsAccountsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsAccountsCreateQueryParams)
    ], VaultMattersHoldsAccountsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HeldAccount)
    ], VaultMattersHoldsAccountsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsAccountsCreateSecurity)
    ], VaultMattersHoldsAccountsCreateRequest.prototype, "security", void 0);
    return VaultMattersHoldsAccountsCreateRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsCreateRequest };
var VaultMattersHoldsAccountsCreateResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAccountsCreateResponse, _super);
    function VaultMattersHoldsAccountsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsAccountsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HeldAccount)
    ], VaultMattersHoldsAccountsCreateResponse.prototype, "heldAccount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsAccountsCreateResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsAccountsCreateResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsAccountsCreateResponse };

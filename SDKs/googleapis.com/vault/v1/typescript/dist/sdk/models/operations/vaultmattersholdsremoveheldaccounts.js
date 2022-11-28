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
var VaultMattersHoldsRemoveHeldAccountsPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsRemoveHeldAccountsPathParams, _super);
    function VaultMattersHoldsRemoveHeldAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holdId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsPathParams.prototype, "holdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsPathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsRemoveHeldAccountsPathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsRemoveHeldAccountsPathParams };
var VaultMattersHoldsRemoveHeldAccountsQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsRemoveHeldAccountsQueryParams, _super);
    function VaultMattersHoldsRemoveHeldAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersHoldsRemoveHeldAccountsQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsRemoveHeldAccountsQueryParams };
var VaultMattersHoldsRemoveHeldAccountsSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsRemoveHeldAccountsSecurity, _super);
    function VaultMattersHoldsRemoveHeldAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsRemoveHeldAccountsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsRemoveHeldAccountsSecurity.prototype, "oauth2c", void 0);
    return VaultMattersHoldsRemoveHeldAccountsSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsRemoveHeldAccountsSecurity };
var VaultMattersHoldsRemoveHeldAccountsRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsRemoveHeldAccountsRequest, _super);
    function VaultMattersHoldsRemoveHeldAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsRemoveHeldAccountsPathParams)
    ], VaultMattersHoldsRemoveHeldAccountsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsRemoveHeldAccountsQueryParams)
    ], VaultMattersHoldsRemoveHeldAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveHeldAccountsRequest)
    ], VaultMattersHoldsRemoveHeldAccountsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersHoldsRemoveHeldAccountsSecurity)
    ], VaultMattersHoldsRemoveHeldAccountsRequest.prototype, "security", void 0);
    return VaultMattersHoldsRemoveHeldAccountsRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsRemoveHeldAccountsRequest };
var VaultMattersHoldsRemoveHeldAccountsResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsRemoveHeldAccountsResponse, _super);
    function VaultMattersHoldsRemoveHeldAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsRemoveHeldAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemoveHeldAccountsResponse)
    ], VaultMattersHoldsRemoveHeldAccountsResponse.prototype, "removeHeldAccountsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsRemoveHeldAccountsResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsRemoveHeldAccountsResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsRemoveHeldAccountsResponse };

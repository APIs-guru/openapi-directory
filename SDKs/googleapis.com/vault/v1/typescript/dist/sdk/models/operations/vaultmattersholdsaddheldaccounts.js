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
var VaultMattersHoldsAddHeldAccountsPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAddHeldAccountsPathParams, _super);
    function VaultMattersHoldsAddHeldAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=holdId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsPathParams.prototype, "holdId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsPathParams.prototype, "matterId", void 0);
    return VaultMattersHoldsAddHeldAccountsPathParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAddHeldAccountsPathParams };
var VaultMattersHoldsAddHeldAccountsQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAddHeldAccountsQueryParams, _super);
    function VaultMattersHoldsAddHeldAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersHoldsAddHeldAccountsQueryParams;
}(SpeakeasyBase));
export { VaultMattersHoldsAddHeldAccountsQueryParams };
var VaultMattersHoldsAddHeldAccountsSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAddHeldAccountsSecurity, _super);
    function VaultMattersHoldsAddHeldAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersHoldsAddHeldAccountsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersHoldsAddHeldAccountsSecurity.prototype, "oauth2c", void 0);
    return VaultMattersHoldsAddHeldAccountsSecurity;
}(SpeakeasyBase));
export { VaultMattersHoldsAddHeldAccountsSecurity };
var VaultMattersHoldsAddHeldAccountsRequest = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAddHeldAccountsRequest, _super);
    function VaultMattersHoldsAddHeldAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersHoldsAddHeldAccountsPathParams)
    ], VaultMattersHoldsAddHeldAccountsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersHoldsAddHeldAccountsQueryParams)
    ], VaultMattersHoldsAddHeldAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddHeldAccountsRequest)
    ], VaultMattersHoldsAddHeldAccountsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VaultMattersHoldsAddHeldAccountsSecurity)
    ], VaultMattersHoldsAddHeldAccountsRequest.prototype, "security", void 0);
    return VaultMattersHoldsAddHeldAccountsRequest;
}(SpeakeasyBase));
export { VaultMattersHoldsAddHeldAccountsRequest };
var VaultMattersHoldsAddHeldAccountsResponse = /** @class */ (function (_super) {
    __extends(VaultMattersHoldsAddHeldAccountsResponse, _super);
    function VaultMattersHoldsAddHeldAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AddHeldAccountsResponse)
    ], VaultMattersHoldsAddHeldAccountsResponse.prototype, "addHeldAccountsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VaultMattersHoldsAddHeldAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VaultMattersHoldsAddHeldAccountsResponse.prototype, "statusCode", void 0);
    return VaultMattersHoldsAddHeldAccountsResponse;
}(SpeakeasyBase));
export { VaultMattersHoldsAddHeldAccountsResponse };

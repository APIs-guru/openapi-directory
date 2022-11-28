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
var IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams.prototype, "name", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams };
var IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams.prototype, "uploadProtocol", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams };
var IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity.prototype, "oauth2c", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity };
var IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsBrandsIdentityAwareProxyClientsResetSecretPathParams)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsBrandsIdentityAwareProxyClientsResetSecretQueryParams)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest.prototype, "security", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest };
var IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse = /** @class */ (function (_super) {
    __extends(IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse, _super);
    function IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IdentityAwareProxyClient)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse.prototype, "identityAwareProxyClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse.prototype, "statusCode", void 0);
    return IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse;
}(SpeakeasyBase));
export { IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse };

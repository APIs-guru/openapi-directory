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
var DeletePersonalAccessTokenPathParams = /** @class */ (function (_super) {
    __extends(DeletePersonalAccessTokenPathParams, _super);
    function DeletePersonalAccessTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tokenId" }),
        __metadata("design:type", Number)
    ], DeletePersonalAccessTokenPathParams.prototype, "tokenId", void 0);
    return DeletePersonalAccessTokenPathParams;
}(SpeakeasyBase));
export { DeletePersonalAccessTokenPathParams };
var DeletePersonalAccessTokenSecurity = /** @class */ (function (_super) {
    __extends(DeletePersonalAccessTokenSecurity, _super);
    function DeletePersonalAccessTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeletePersonalAccessTokenSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeletePersonalAccessTokenSecurity.prototype, "oauth", void 0);
    return DeletePersonalAccessTokenSecurity;
}(SpeakeasyBase));
export { DeletePersonalAccessTokenSecurity };
var DeletePersonalAccessTokenDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePersonalAccessTokenDefaultApplicationJson, _super);
    function DeletePersonalAccessTokenDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeletePersonalAccessTokenDefaultApplicationJson.prototype, "errors", void 0);
    return DeletePersonalAccessTokenDefaultApplicationJson;
}(SpeakeasyBase));
export { DeletePersonalAccessTokenDefaultApplicationJson };
var DeletePersonalAccessTokenRequest = /** @class */ (function (_super) {
    __extends(DeletePersonalAccessTokenRequest, _super);
    function DeletePersonalAccessTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePersonalAccessTokenPathParams)
    ], DeletePersonalAccessTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePersonalAccessTokenSecurity)
    ], DeletePersonalAccessTokenRequest.prototype, "security", void 0);
    return DeletePersonalAccessTokenRequest;
}(SpeakeasyBase));
export { DeletePersonalAccessTokenRequest };
var DeletePersonalAccessTokenResponse = /** @class */ (function (_super) {
    __extends(DeletePersonalAccessTokenResponse, _super);
    function DeletePersonalAccessTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePersonalAccessTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePersonalAccessTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeletePersonalAccessTokenResponse.prototype, "deletePersonalAccessToken200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePersonalAccessTokenDefaultApplicationJson)
    ], DeletePersonalAccessTokenResponse.prototype, "deletePersonalAccessTokenDefaultApplicationJsonObject", void 0);
    return DeletePersonalAccessTokenResponse;
}(SpeakeasyBase));
export { DeletePersonalAccessTokenResponse };

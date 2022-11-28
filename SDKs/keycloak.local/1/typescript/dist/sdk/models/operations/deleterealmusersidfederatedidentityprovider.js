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
var DeleteRealmUsersIdFederatedIdentityProviderPathParams = /** @class */ (function (_super) {
    __extends(DeleteRealmUsersIdFederatedIdentityProviderPathParams, _super);
    function DeleteRealmUsersIdFederatedIdentityProviderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteRealmUsersIdFederatedIdentityProviderPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], DeleteRealmUsersIdFederatedIdentityProviderPathParams.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], DeleteRealmUsersIdFederatedIdentityProviderPathParams.prototype, "realm", void 0);
    return DeleteRealmUsersIdFederatedIdentityProviderPathParams;
}(SpeakeasyBase));
export { DeleteRealmUsersIdFederatedIdentityProviderPathParams };
var DeleteRealmUsersIdFederatedIdentityProviderRequest = /** @class */ (function (_super) {
    __extends(DeleteRealmUsersIdFederatedIdentityProviderRequest, _super);
    function DeleteRealmUsersIdFederatedIdentityProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRealmUsersIdFederatedIdentityProviderPathParams)
    ], DeleteRealmUsersIdFederatedIdentityProviderRequest.prototype, "pathParams", void 0);
    return DeleteRealmUsersIdFederatedIdentityProviderRequest;
}(SpeakeasyBase));
export { DeleteRealmUsersIdFederatedIdentityProviderRequest };
var DeleteRealmUsersIdFederatedIdentityProviderResponse = /** @class */ (function (_super) {
    __extends(DeleteRealmUsersIdFederatedIdentityProviderResponse, _super);
    function DeleteRealmUsersIdFederatedIdentityProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRealmUsersIdFederatedIdentityProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRealmUsersIdFederatedIdentityProviderResponse.prototype, "statusCode", void 0);
    return DeleteRealmUsersIdFederatedIdentityProviderResponse;
}(SpeakeasyBase));
export { DeleteRealmUsersIdFederatedIdentityProviderResponse };

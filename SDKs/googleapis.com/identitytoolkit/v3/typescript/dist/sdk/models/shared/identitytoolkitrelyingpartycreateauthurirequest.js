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
// IdentitytoolkitRelyingpartyCreateAuthUriRequest
/**
 * Request to get the IDP authentication URL.
**/
var IdentitytoolkitRelyingpartyCreateAuthUriRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartyCreateAuthUriRequest, _super);
    function IdentitytoolkitRelyingpartyCreateAuthUriRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authFlowType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "authFlowType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueUri" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "continueUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customParameter" }),
        __metadata("design:type", Map)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "customParameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostedDomain" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "hostedDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthConsumerKey" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "oauthConsumerKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthScope" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "oauthScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openidRealm" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "openidRealm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otaApp" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "otaApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "providerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenantId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "tenantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenantProjectNumber" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartyCreateAuthUriRequest.prototype, "tenantProjectNumber", void 0);
    return IdentitytoolkitRelyingpartyCreateAuthUriRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartyCreateAuthUriRequest };

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
import { ResourceServerRepresentation } from "./resourceserverrepresentation";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";
var ClientRepresentation = /** @class */ (function (_super) {
    __extends(ClientRepresentation, _super);
    function ClientRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", Map)
    ], ClientRepresentation.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminUrl" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "adminUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alwaysDisplayInConsole" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "alwaysDisplayInConsole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], ClientRepresentation.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationFlowBindingOverrides" }),
        __metadata("design:type", Map)
    ], ClientRepresentation.prototype, "authenticationFlowBindingOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationServicesEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "authorizationServicesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationSettings" }),
        __metadata("design:type", ResourceServerRepresentation)
    ], ClientRepresentation.prototype, "authorizationSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUrl" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "baseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bearerOnly" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "bearerOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAuthenticatorType" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "clientAuthenticatorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consentRequired" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "consentRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultClientScopes" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "defaultClientScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultRoles" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "defaultRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directAccessGrantsEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "directAccessGrantsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frontchannelLogout" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "frontchannelLogout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullScopeAllowed" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "fullScopeAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=implicitFlowEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "implicitFlowEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeReRegistrationTimeout" }),
        __metadata("design:type", Number)
    ], ClientRepresentation.prototype, "nodeReRegistrationTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notBefore" }),
        __metadata("design:type", Number)
    ], ClientRepresentation.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionalClientScopes" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "optionalClientScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocolMappers", elemType: ProtocolMapperRepresentation }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "protocolMappers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicClient" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "publicClient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUris" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "redirectUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registeredNodes" }),
        __metadata("design:type", Map)
    ], ClientRepresentation.prototype, "registeredNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationAccessToken" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "registrationAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootUrl" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "rootUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], ClientRepresentation.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountsEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "serviceAccountsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardFlowEnabled" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "standardFlowEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surrogateAuthRequired" }),
        __metadata("design:type", Boolean)
    ], ClientRepresentation.prototype, "surrogateAuthRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webOrigins" }),
        __metadata("design:type", Array)
    ], ClientRepresentation.prototype, "webOrigins", void 0);
    return ClientRepresentation;
}(SpeakeasyBase));
export { ClientRepresentation };

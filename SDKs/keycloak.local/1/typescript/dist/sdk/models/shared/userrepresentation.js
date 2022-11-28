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
import { UserConsentRepresentation } from "./userconsentrepresentation";
import { CredentialRepresentation } from "./credentialrepresentation";
import { FederatedIdentityRepresentation } from "./federatedidentityrepresentation";
var UserRepresentation = /** @class */ (function (_super) {
    __extends(UserRepresentation, _super);
    function UserRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", Map)
    ], UserRepresentation.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], UserRepresentation.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientConsents", elemType: UserConsentRepresentation }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "clientConsents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRoles" }),
        __metadata("design:type", Map)
    ], UserRepresentation.prototype, "clientRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTimestamp" }),
        __metadata("design:type", Number)
    ], UserRepresentation.prototype, "createdTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials", elemType: CredentialRepresentation }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableableCredentialTypes" }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "disableableCredentialTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailVerified" }),
        __metadata("design:type", Boolean)
    ], UserRepresentation.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UserRepresentation.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federatedIdentities", elemType: FederatedIdentityRepresentation }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "federatedIdentities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federationLink" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "federationLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notBefore" }),
        __metadata("design:type", Number)
    ], UserRepresentation.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realmRoles" }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "realmRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredActions" }),
        __metadata("design:type", Array)
    ], UserRepresentation.prototype, "requiredActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountClientId" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "serviceAccountClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserRepresentation.prototype, "username", void 0);
    return UserRepresentation;
}(SpeakeasyBase));
export { UserRepresentation };

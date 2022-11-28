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
var IdentityProviderRepresentation = /** @class */ (function (_super) {
    __extends(IdentityProviderRepresentation, _super);
    function IdentityProviderRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addReadTokenRoleOnCreate" }),
        __metadata("design:type", Boolean)
    ], IdentityProviderRepresentation.prototype, "addReadTokenRoleOnCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], IdentityProviderRepresentation.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", Map)
    ], IdentityProviderRepresentation.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], IdentityProviderRepresentation.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], IdentityProviderRepresentation.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstBrokerLoginFlowAlias" }),
        __metadata("design:type", String)
    ], IdentityProviderRepresentation.prototype, "firstBrokerLoginFlowAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalId" }),
        __metadata("design:type", String)
    ], IdentityProviderRepresentation.prototype, "internalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkOnly" }),
        __metadata("design:type", Boolean)
    ], IdentityProviderRepresentation.prototype, "linkOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postBrokerLoginFlowAlias" }),
        __metadata("design:type", String)
    ], IdentityProviderRepresentation.prototype, "postBrokerLoginFlowAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], IdentityProviderRepresentation.prototype, "providerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storeToken" }),
        __metadata("design:type", Boolean)
    ], IdentityProviderRepresentation.prototype, "storeToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trustEmail" }),
        __metadata("design:type", Boolean)
    ], IdentityProviderRepresentation.prototype, "trustEmail", void 0);
    return IdentityProviderRepresentation;
}(SpeakeasyBase));
export { IdentityProviderRepresentation };

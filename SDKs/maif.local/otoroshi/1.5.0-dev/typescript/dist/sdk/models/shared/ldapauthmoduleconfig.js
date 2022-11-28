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
// LdapAuthModuleConfig
/**
 * Settings to authenticate users using a generic OAuth2 provider
**/
var LdapAuthModuleConfig = /** @class */ (function (_super) {
    __extends(LdapAuthModuleConfig, _super);
    function LdapAuthModuleConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminPassword" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "adminPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminUsername" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "adminUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "desc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailField" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "emailField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupFilter" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "groupFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameField" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "nameField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otoroshiDataField" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "otoroshiDataField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchBase" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "searchBase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchFilter" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "searchFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverUrl" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionMaxAge" }),
        __metadata("design:type", Number)
    ], LdapAuthModuleConfig.prototype, "sessionMaxAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userBase" }),
        __metadata("design:type", String)
    ], LdapAuthModuleConfig.prototype, "userBase", void 0);
    return LdapAuthModuleConfig;
}(SpeakeasyBase));
export { LdapAuthModuleConfig };

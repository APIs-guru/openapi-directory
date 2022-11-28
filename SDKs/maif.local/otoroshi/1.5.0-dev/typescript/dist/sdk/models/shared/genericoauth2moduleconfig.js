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
// GenericOauth2ModuleConfig
/**
 * Settings to authenticate users using a generic OAuth2 provider
**/
var GenericOauth2ModuleConfig = /** @class */ (function (_super) {
    __extends(GenericOauth2ModuleConfig, _super);
    function GenericOauth2ModuleConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessTokenField" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "accessTokenField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizeUrl" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "authorizeUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callbackUrl" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claims" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "claims", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "desc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailField" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "emailField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwtVerifier" }),
        __metadata("design:type", Object)
    ], GenericOauth2ModuleConfig.prototype, "jwtVerifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loginUrl" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "loginUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logoutUrl" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "logoutUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameField" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "nameField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidConfig" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "oidConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otoroshiDataField" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "otoroshiDataField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readProfileFromToken" }),
        __metadata("design:type", Boolean)
    ], GenericOauth2ModuleConfig.prototype, "readProfileFromToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionMaxAge" }),
        __metadata("design:type", Number)
    ], GenericOauth2ModuleConfig.prototype, "sessionMaxAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenUrl" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "tokenUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useCookies" }),
        __metadata("design:type", Boolean)
    ], GenericOauth2ModuleConfig.prototype, "useCookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useJson" }),
        __metadata("design:type", Boolean)
    ], GenericOauth2ModuleConfig.prototype, "useJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfoUrl" }),
        __metadata("design:type", String)
    ], GenericOauth2ModuleConfig.prototype, "userInfoUrl", void 0);
    return GenericOauth2ModuleConfig;
}(SpeakeasyBase));
export { GenericOauth2ModuleConfig };

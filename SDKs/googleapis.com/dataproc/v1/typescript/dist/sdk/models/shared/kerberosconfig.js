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
// KerberosConfig
/**
 * Specifies Kerberos related configuration.
**/
var KerberosConfig = /** @class */ (function (_super) {
    __extends(KerberosConfig, _super);
    function KerberosConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossRealmTrustAdminServer" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "crossRealmTrustAdminServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossRealmTrustKdc" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "crossRealmTrustKdc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossRealmTrustRealm" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "crossRealmTrustRealm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossRealmTrustSharedPasswordUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "crossRealmTrustSharedPasswordUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableKerberos" }),
        __metadata("design:type", Boolean)
    ], KerberosConfig.prototype, "enableKerberos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kdcDbKeyUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "kdcDbKeyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPasswordUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "keyPasswordUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keystorePasswordUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "keystorePasswordUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keystoreUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "keystoreUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "kmsKeyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realm" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootPrincipalPasswordUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "rootPrincipalPasswordUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tgtLifetimeHours" }),
        __metadata("design:type", Number)
    ], KerberosConfig.prototype, "tgtLifetimeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truststorePasswordUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "truststorePasswordUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truststoreUri" }),
        __metadata("design:type", String)
    ], KerberosConfig.prototype, "truststoreUri", void 0);
    return KerberosConfig;
}(SpeakeasyBase));
export { KerberosConfig };

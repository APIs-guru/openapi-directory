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
import { PublicKey } from "./publickey";
import { ReusableConfigWrapper } from "./reusableconfigwrapper";
import { SubjectConfig } from "./subjectconfig";
// CertificateConfig
/**
 * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
**/
var CertificateConfig = /** @class */ (function (_super) {
    __extends(CertificateConfig, _super);
    function CertificateConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKey" }),
        __metadata("design:type", PublicKey)
    ], CertificateConfig.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reusableConfig" }),
        __metadata("design:type", ReusableConfigWrapper)
    ], CertificateConfig.prototype, "reusableConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectConfig" }),
        __metadata("design:type", SubjectConfig)
    ], CertificateConfig.prototype, "subjectConfig", void 0);
    return CertificateConfig;
}(SpeakeasyBase));
export { CertificateConfig };

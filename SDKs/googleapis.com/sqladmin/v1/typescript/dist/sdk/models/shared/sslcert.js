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
// SslCert
/**
 * SslCerts Resource
**/
var SslCert = /** @class */ (function (_super) {
    __extends(SslCert, _super);
    function SslCert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cert" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "cert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certSerialNumber" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "certSerialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonName" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "commonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Fingerprint" }),
        __metadata("design:type", String)
    ], SslCert.prototype, "sha1Fingerprint", void 0);
    return SslCert;
}(SpeakeasyBase));
export { SslCert };

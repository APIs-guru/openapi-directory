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
var CertificateOrKeyGetSchema = /** @class */ (function (_super) {
    __extends(CertificateOrKeyGetSchema, _super);
    function CertificateOrKeyGetSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alg" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "alg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=e" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "e", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kid" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "kid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kty" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "kty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=n" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "n", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "use", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x5c" }),
        __metadata("design:type", Array)
    ], CertificateOrKeyGetSchema.prototype, "x5c", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x5t" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "x5t", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x5t#S256" }),
        __metadata("design:type", String)
    ], CertificateOrKeyGetSchema.prototype, "x5tNumberS256", void 0);
    return CertificateOrKeyGetSchema;
}(SpeakeasyBase));
export { CertificateOrKeyGetSchema };

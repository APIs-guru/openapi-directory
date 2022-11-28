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
// AllowedSubjectAltNames
/**
 * AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
**/
var AllowedSubjectAltNames = /** @class */ (function (_super) {
    __extends(AllowedSubjectAltNames, _super);
    function AllowedSubjectAltNames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowCustomSans" }),
        __metadata("design:type", Boolean)
    ], AllowedSubjectAltNames.prototype, "allowCustomSans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowGlobbingDnsWildcards" }),
        __metadata("design:type", Boolean)
    ], AllowedSubjectAltNames.prototype, "allowGlobbingDnsWildcards", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedDnsNames" }),
        __metadata("design:type", Array)
    ], AllowedSubjectAltNames.prototype, "allowedDnsNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedEmailAddresses" }),
        __metadata("design:type", Array)
    ], AllowedSubjectAltNames.prototype, "allowedEmailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIps" }),
        __metadata("design:type", Array)
    ], AllowedSubjectAltNames.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedUris" }),
        __metadata("design:type", Array)
    ], AllowedSubjectAltNames.prototype, "allowedUris", void 0);
    return AllowedSubjectAltNames;
}(SpeakeasyBase));
export { AllowedSubjectAltNames };

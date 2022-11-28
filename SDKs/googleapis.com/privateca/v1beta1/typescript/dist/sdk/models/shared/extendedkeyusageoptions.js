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
// ExtendedKeyUsageOptions
/**
 * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
**/
var ExtendedKeyUsageOptions = /** @class */ (function (_super) {
    __extends(ExtendedKeyUsageOptions, _super);
    function ExtendedKeyUsageOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAuth" }),
        __metadata("design:type", Boolean)
    ], ExtendedKeyUsageOptions.prototype, "clientAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeSigning" }),
        __metadata("design:type", Boolean)
    ], ExtendedKeyUsageOptions.prototype, "codeSigning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailProtection" }),
        __metadata("design:type", Boolean)
    ], ExtendedKeyUsageOptions.prototype, "emailProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ocspSigning" }),
        __metadata("design:type", Boolean)
    ], ExtendedKeyUsageOptions.prototype, "ocspSigning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverAuth" }),
        __metadata("design:type", Boolean)
    ], ExtendedKeyUsageOptions.prototype, "serverAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeStamping" }),
        __metadata("design:type", Boolean)
    ], ExtendedKeyUsageOptions.prototype, "timeStamping", void 0);
    return ExtendedKeyUsageOptions;
}(SpeakeasyBase));
export { ExtendedKeyUsageOptions };

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
// KeyUsageOptions
/**
 * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
**/
var KeyUsageOptions = /** @class */ (function (_super) {
    __extends(KeyUsageOptions, _super);
    function KeyUsageOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certSign" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "certSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentCommitment" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "contentCommitment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crlSign" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "crlSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataEncipherment" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "dataEncipherment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decipherOnly" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "decipherOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digitalSignature" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "digitalSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encipherOnly" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "encipherOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyAgreement" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "keyAgreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyEncipherment" }),
        __metadata("design:type", Boolean)
    ], KeyUsageOptions.prototype, "keyEncipherment", void 0);
    return KeyUsageOptions;
}(SpeakeasyBase));
export { KeyUsageOptions };

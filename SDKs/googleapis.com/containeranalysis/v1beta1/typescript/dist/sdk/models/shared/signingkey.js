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
// SigningKey
/**
 * This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.
**/
var SigningKey = /** @class */ (function (_super) {
    __extends(SigningKey, _super);
    function SigningKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyId" }),
        __metadata("design:type", String)
    ], SigningKey.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyScheme" }),
        __metadata("design:type", String)
    ], SigningKey.prototype, "keyScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyType" }),
        __metadata("design:type", String)
    ], SigningKey.prototype, "keyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicKeyValue" }),
        __metadata("design:type", String)
    ], SigningKey.prototype, "publicKeyValue", void 0);
    return SigningKey;
}(SpeakeasyBase));
export { SigningKey };

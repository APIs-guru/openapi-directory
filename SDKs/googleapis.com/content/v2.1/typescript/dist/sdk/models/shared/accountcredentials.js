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
export var AccountCredentialsPurposeEnum;
(function (AccountCredentialsPurposeEnum) {
    AccountCredentialsPurposeEnum["AccountCredentialsPurposeUnspecified"] = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED";
    AccountCredentialsPurposeEnum["ShopifyOrderManagement"] = "SHOPIFY_ORDER_MANAGEMENT";
    AccountCredentialsPurposeEnum["ShopifyIntegration"] = "SHOPIFY_INTEGRATION";
})(AccountCredentialsPurposeEnum || (AccountCredentialsPurposeEnum = {}));
// AccountCredentials
/**
 * Credentials allowing Google to call a partner's API on behalf of a merchant.
**/
var AccountCredentials = /** @class */ (function (_super) {
    __extends(AccountCredentials, _super);
    function AccountCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessToken" }),
        __metadata("design:type", String)
    ], AccountCredentials.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresIn" }),
        __metadata("design:type", String)
    ], AccountCredentials.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], AccountCredentials.prototype, "purpose", void 0);
    return AccountCredentials;
}(SpeakeasyBase));
export { AccountCredentials };

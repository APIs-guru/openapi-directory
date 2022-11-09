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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig } from "./googlecloudidentitytoolkitadminv2codeflowconfig";
// GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig
/**
 * Additional config for SignInWithApple.
**/
var GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig, _super);
    function GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bundleIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig.prototype, "bundleIds", void 0);
    __decorate([
        Metadata({ data: "json, name=codeFlowConfig" }),
        __metadata("design:type", GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig)
    ], GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig.prototype, "codeFlowConfig", void 0);
    return GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
}(SpeakeasyBase));
export { GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig };

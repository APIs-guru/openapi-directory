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
import { PrivateClusterConfig } from "./privateclusterconfig";
// PrivateEnvironmentConfig
/**
 * The configuration information for configuring a Private IP Cloud Composer environment.
**/
var PrivateEnvironmentConfig = /** @class */ (function (_super) {
    __extends(PrivateEnvironmentConfig, _super);
    function PrivateEnvironmentConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cloudComposerConnectionSubnetwork" }),
        __metadata("design:type", String)
    ], PrivateEnvironmentConfig.prototype, "cloudComposerConnectionSubnetwork", void 0);
    __decorate([
        Metadata({ data: "json, name=cloudComposerNetworkIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], PrivateEnvironmentConfig.prototype, "cloudComposerNetworkIpv4CidrBlock", void 0);
    __decorate([
        Metadata({ data: "json, name=cloudComposerNetworkIpv4ReservedRange" }),
        __metadata("design:type", String)
    ], PrivateEnvironmentConfig.prototype, "cloudComposerNetworkIpv4ReservedRange", void 0);
    __decorate([
        Metadata({ data: "json, name=cloudSqlIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], PrivateEnvironmentConfig.prototype, "cloudSqlIpv4CidrBlock", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePrivateEnvironment" }),
        __metadata("design:type", Boolean)
    ], PrivateEnvironmentConfig.prototype, "enablePrivateEnvironment", void 0);
    __decorate([
        Metadata({ data: "json, name=enablePrivatelyUsedPublicIps" }),
        __metadata("design:type", Boolean)
    ], PrivateEnvironmentConfig.prototype, "enablePrivatelyUsedPublicIps", void 0);
    __decorate([
        Metadata({ data: "json, name=privateClusterConfig" }),
        __metadata("design:type", PrivateClusterConfig)
    ], PrivateEnvironmentConfig.prototype, "privateClusterConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=webServerIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], PrivateEnvironmentConfig.prototype, "webServerIpv4CidrBlock", void 0);
    __decorate([
        Metadata({ data: "json, name=webServerIpv4ReservedRange" }),
        __metadata("design:type", String)
    ], PrivateEnvironmentConfig.prototype, "webServerIpv4ReservedRange", void 0);
    return PrivateEnvironmentConfig;
}(SpeakeasyBase));
export { PrivateEnvironmentConfig };

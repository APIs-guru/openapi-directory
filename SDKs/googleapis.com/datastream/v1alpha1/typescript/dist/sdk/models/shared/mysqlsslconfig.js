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
// MysqlSslConfig
/**
 * MySQL SSL configuration information.
**/
var MysqlSslConfig = /** @class */ (function (_super) {
    __extends(MysqlSslConfig, _super);
    function MysqlSslConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificate" }),
        __metadata("design:type", String)
    ], MysqlSslConfig.prototype, "caCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateSet" }),
        __metadata("design:type", Boolean)
    ], MysqlSslConfig.prototype, "caCertificateSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientCertificate" }),
        __metadata("design:type", String)
    ], MysqlSslConfig.prototype, "clientCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientCertificateSet" }),
        __metadata("design:type", Boolean)
    ], MysqlSslConfig.prototype, "clientCertificateSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientKey" }),
        __metadata("design:type", String)
    ], MysqlSslConfig.prototype, "clientKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientKeySet" }),
        __metadata("design:type", Boolean)
    ], MysqlSslConfig.prototype, "clientKeySet", void 0);
    return MysqlSslConfig;
}(SpeakeasyBase));
export { MysqlSslConfig };
// MysqlSslConfigInput
/**
 * MySQL SSL configuration information.
**/
var MysqlSslConfigInput = /** @class */ (function (_super) {
    __extends(MysqlSslConfigInput, _super);
    function MysqlSslConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificate" }),
        __metadata("design:type", String)
    ], MysqlSslConfigInput.prototype, "caCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientCertificate" }),
        __metadata("design:type", String)
    ], MysqlSslConfigInput.prototype, "clientCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientKey" }),
        __metadata("design:type", String)
    ], MysqlSslConfigInput.prototype, "clientKey", void 0);
    return MysqlSslConfigInput;
}(SpeakeasyBase));
export { MysqlSslConfigInput };

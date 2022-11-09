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
export var DomainCdnConfigMinimumTlsVersionEnum;
(function (DomainCdnConfigMinimumTlsVersionEnum) {
    DomainCdnConfigMinimumTlsVersionEnum["One0"] = "1.0";
    DomainCdnConfigMinimumTlsVersionEnum["One1"] = "1.1";
    DomainCdnConfigMinimumTlsVersionEnum["One2"] = "1.2";
    DomainCdnConfigMinimumTlsVersionEnum["One3"] = "1.3";
    DomainCdnConfigMinimumTlsVersionEnum["None"] = "none";
    DomainCdnConfigMinimumTlsVersionEnum["Null"] = "null";
})(DomainCdnConfigMinimumTlsVersionEnum || (DomainCdnConfigMinimumTlsVersionEnum = {}));
export var DomainCdnConfigSslStatusEnum;
(function (DomainCdnConfigSslStatusEnum) {
    DomainCdnConfigSslStatusEnum["Zero"] = "0";
    DomainCdnConfigSslStatusEnum["One"] = "1";
    DomainCdnConfigSslStatusEnum["Two"] = "2";
    DomainCdnConfigSslStatusEnum["Three"] = "3";
    DomainCdnConfigSslStatusEnum["Four"] = "4";
    DomainCdnConfigSslStatusEnum["Five"] = "5";
    DomainCdnConfigSslStatusEnum["Six"] = "6";
    DomainCdnConfigSslStatusEnum["Seven"] = "7";
    DomainCdnConfigSslStatusEnum["Eight"] = "8";
    DomainCdnConfigSslStatusEnum["Nine"] = "9";
    DomainCdnConfigSslStatusEnum["Ten"] = "10";
    DomainCdnConfigSslStatusEnum["Eleven"] = "11";
})(DomainCdnConfigSslStatusEnum || (DomainCdnConfigSslStatusEnum = {}));
export var DomainCdnConfigValidationMethodEnum;
(function (DomainCdnConfigValidationMethodEnum) {
    DomainCdnConfigValidationMethodEnum["Zero"] = "0";
    DomainCdnConfigValidationMethodEnum["One"] = "1";
    DomainCdnConfigValidationMethodEnum["Two"] = "2";
})(DomainCdnConfigValidationMethodEnum || (DomainCdnConfigValidationMethodEnum = {}));
var DomainCdnConfig = /** @class */ (function (_super) {
    __extends(DomainCdnConfig, _super);
    function DomainCdnConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alternateOriginHostname" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "alternateOriginHostname", void 0);
    __decorate([
        Metadata({ data: "json, name=cdnGroupId" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "cdnGroupId", void 0);
    __decorate([
        Metadata({ data: "json, name=cdnId" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "cdnId", void 0);
    __decorate([
        Metadata({ data: "json, name=certExpirationDate" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "certExpirationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=certId" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "certId", void 0);
    __decorate([
        Metadata({ data: "json, name=cname" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "cname", void 0);
    __decorate([
        Metadata({ data: "json, name=cnameTarget" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "cnameTarget", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=domainId" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "domainId", void 0);
    __decorate([
        Metadata({ data: "json, name=httpBody" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "httpBody", void 0);
    __decorate([
        Metadata({ data: "json, name=httpUrlPath" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "httpUrlPath", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=minimumTlsVersion" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "minimumTlsVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=portalId" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "portalId", void 0);
    __decorate([
        Metadata({ data: "json, name=sslStatus" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "sslStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", Number)
    ], DomainCdnConfig.prototype, "updated", void 0);
    __decorate([
        Metadata({ data: "json, name=validationMethod" }),
        __metadata("design:type", String)
    ], DomainCdnConfig.prototype, "validationMethod", void 0);
    return DomainCdnConfig;
}(SpeakeasyBase));
export { DomainCdnConfig };

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
import { DomainRedirect } from "./domainredirect";
import { DomainProvisioning } from "./domainprovisioning";
export var DomainStatusEnum;
(function (DomainStatusEnum) {
    DomainStatusEnum["DomainStatusUnspecified"] = "DOMAIN_STATUS_UNSPECIFIED";
    DomainStatusEnum["DomainChangePending"] = "DOMAIN_CHANGE_PENDING";
    DomainStatusEnum["DomainActive"] = "DOMAIN_ACTIVE";
    DomainStatusEnum["DomainVerificationRequired"] = "DOMAIN_VERIFICATION_REQUIRED";
    DomainStatusEnum["DomainVerificationLost"] = "DOMAIN_VERIFICATION_LOST";
})(DomainStatusEnum || (DomainStatusEnum = {}));
// Domain
/**
 * The intended behavior and status information of a domain.
**/
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], Domain.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainRedirect" }),
        __metadata("design:type", DomainRedirect)
    ], Domain.prototype, "domainRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioning" }),
        __metadata("design:type", DomainProvisioning)
    ], Domain.prototype, "provisioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", String)
    ], Domain.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Domain.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Domain.prototype, "updateTime", void 0);
    return Domain;
}(SpeakeasyBase));
export { Domain };

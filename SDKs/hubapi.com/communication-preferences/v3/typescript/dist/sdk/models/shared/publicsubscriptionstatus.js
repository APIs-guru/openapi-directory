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
export var PublicSubscriptionStatusLegalBasisEnum;
(function (PublicSubscriptionStatusLegalBasisEnum) {
    PublicSubscriptionStatusLegalBasisEnum["LegitimateInterestPql"] = "LEGITIMATE_INTEREST_PQL";
    PublicSubscriptionStatusLegalBasisEnum["LegitimateInterestClient"] = "LEGITIMATE_INTEREST_CLIENT";
    PublicSubscriptionStatusLegalBasisEnum["PerformanceOfContract"] = "PERFORMANCE_OF_CONTRACT";
    PublicSubscriptionStatusLegalBasisEnum["ConsentWithNotice"] = "CONSENT_WITH_NOTICE";
    PublicSubscriptionStatusLegalBasisEnum["NonGdpr"] = "NON_GDPR";
    PublicSubscriptionStatusLegalBasisEnum["ProcessAndStore"] = "PROCESS_AND_STORE";
    PublicSubscriptionStatusLegalBasisEnum["LegitimateInterestOther"] = "LEGITIMATE_INTEREST_OTHER";
})(PublicSubscriptionStatusLegalBasisEnum || (PublicSubscriptionStatusLegalBasisEnum = {}));
export var PublicSubscriptionStatusSourceOfStatusEnum;
(function (PublicSubscriptionStatusSourceOfStatusEnum) {
    PublicSubscriptionStatusSourceOfStatusEnum["PortalWideStatus"] = "PORTAL_WIDE_STATUS";
    PublicSubscriptionStatusSourceOfStatusEnum["BrandWideStatus"] = "BRAND_WIDE_STATUS";
    PublicSubscriptionStatusSourceOfStatusEnum["SubscriptionStatus"] = "SUBSCRIPTION_STATUS";
})(PublicSubscriptionStatusSourceOfStatusEnum || (PublicSubscriptionStatusSourceOfStatusEnum = {}));
export var PublicSubscriptionStatusStatusEnum;
(function (PublicSubscriptionStatusStatusEnum) {
    PublicSubscriptionStatusStatusEnum["Subscribed"] = "SUBSCRIBED";
    PublicSubscriptionStatusStatusEnum["NotSubscribed"] = "NOT_SUBSCRIBED";
})(PublicSubscriptionStatusStatusEnum || (PublicSubscriptionStatusStatusEnum = {}));
// PublicSubscriptionStatus
/**
 * The status of a subscription for a contact.
**/
var PublicSubscriptionStatus = /** @class */ (function (_super) {
    __extends(PublicSubscriptionStatus, _super);
    function PublicSubscriptionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=brandId" }),
        __metadata("design:type", Number)
    ], PublicSubscriptionStatus.prototype, "brandId", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=legalBasis" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "legalBasis", void 0);
    __decorate([
        Metadata({ data: "json, name=legalBasisExplanation" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "legalBasisExplanation", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=preferenceGroupName" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "preferenceGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceOfStatus" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "sourceOfStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PublicSubscriptionStatus.prototype, "status", void 0);
    return PublicSubscriptionStatus;
}(SpeakeasyBase));
export { PublicSubscriptionStatus };

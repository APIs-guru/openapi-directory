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
export var PromotionServiceTypeEnum;
(function (PromotionServiceTypeEnum) {
    PromotionServiceTypeEnum["All"] = "all";
    PromotionServiceTypeEnum["Backup"] = "backup";
    PromotionServiceTypeEnum["Blockstorage"] = "blockstorage";
    PromotionServiceTypeEnum["DbMysql"] = "db_mysql";
    PromotionServiceTypeEnum["IpV4"] = "ip_v4";
    PromotionServiceTypeEnum["Linode"] = "linode";
    PromotionServiceTypeEnum["LinodeDisk"] = "linode_disk";
    PromotionServiceTypeEnum["LinodeMemory"] = "linode_memory";
    PromotionServiceTypeEnum["Longview"] = "longview";
    PromotionServiceTypeEnum["Managed"] = "managed";
    PromotionServiceTypeEnum["Nodebalancer"] = "nodebalancer";
    PromotionServiceTypeEnum["Objectstorage"] = "objectstorage";
    PromotionServiceTypeEnum["TransferTx"] = "transfer_tx";
})(PromotionServiceTypeEnum || (PromotionServiceTypeEnum = {}));
// Promotion
/**
 * Promotions generally
 * offer a set amount of credit that can be used toward your Linode
 * services, and the promotion expires after a specified date. As well,
 * a monthly cap on the promotional offer is set.
 *
 * Simply put, a promotion offers a certain amount of credit every
 * month, until either the expiration date is passed, or until the total
 * promotional credit is used, whichever comes first.
 *
**/
var Promotion = /** @class */ (function (_super) {
    __extends(Promotion, _super);
    function Promotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credit_monthly_cap" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "creditMonthlyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credit_remaining" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "creditRemaining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_dt" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "expireDt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_type" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=this_month_credit_remaining" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "thisMonthCreditRemaining", void 0);
    return Promotion;
}(SpeakeasyBase));
export { Promotion };

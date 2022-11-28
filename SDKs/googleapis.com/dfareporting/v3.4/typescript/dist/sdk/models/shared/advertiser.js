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
import { DimensionValue } from "./dimensionvalue";
export var AdvertiserStatusEnum;
(function (AdvertiserStatusEnum) {
    AdvertiserStatusEnum["Approved"] = "APPROVED";
    AdvertiserStatusEnum["OnHold"] = "ON_HOLD";
})(AdvertiserStatusEnum || (AdvertiserStatusEnum = {}));
// Advertiser
/**
 * Contains properties of a Campaign Manager advertiser.
**/
var Advertiser = /** @class */ (function (_super) {
    __extends(Advertiser, _super);
    function Advertiser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserGroupId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "advertiserGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffix" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "clickThroughUrlSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "defaultClickThroughEventTagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultEmail" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "defaultEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "floodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigurationIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Advertiser.prototype, "floodlightConfigurationIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Advertiser.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalFloodlightConfigurationId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "originalFloodlightConfigurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], Advertiser.prototype, "suspended", void 0);
    return Advertiser;
}(SpeakeasyBase));
export { Advertiser };

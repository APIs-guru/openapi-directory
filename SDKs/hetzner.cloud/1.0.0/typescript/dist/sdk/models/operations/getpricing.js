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
var GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly, _super);
    function GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly };
// GetPricing200ApplicationJsonPricingFloatingIp
/**
 * The cost of one Floating IP per month
**/
var GetPricing200ApplicationJsonPricingFloatingIp = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingFloatingIp, _super);
    function GetPricing200ApplicationJsonPricingFloatingIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingFloatingIpPriceMonthly)
    ], GetPricing200ApplicationJsonPricingFloatingIp.prototype, "priceMonthly", void 0);
    return GetPricing200ApplicationJsonPricingFloatingIp;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingFloatingIp };
// GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly
/**
 * Monthly costs for a Floating IP type in this Location
**/
var GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly, _super);
    function GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly };
var GetPricing200ApplicationJsonPricingFloatingIpsPrices = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingFloatingIpsPrices, _super);
    function GetPricing200ApplicationJsonPricingFloatingIpsPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingFloatingIpsPrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingFloatingIpsPricesPriceMonthly)
    ], GetPricing200ApplicationJsonPricingFloatingIpsPrices.prototype, "priceMonthly", void 0);
    return GetPricing200ApplicationJsonPricingFloatingIpsPrices;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingFloatingIpsPrices };
export var GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum;
(function (GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum) {
    GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum["Ipv4"] = "ipv4";
    GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum["Ipv6"] = "ipv6";
})(GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum || (GetPricing200ApplicationJsonPricingFloatingIpsTypeEnum = {}));
var GetPricing200ApplicationJsonPricingFloatingIps = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingFloatingIps, _super);
    function GetPricing200ApplicationJsonPricingFloatingIps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetPricing200ApplicationJsonPricingFloatingIpsPrices }),
        __metadata("design:type", Array)
    ], GetPricing200ApplicationJsonPricingFloatingIps.prototype, "prices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingFloatingIps.prototype, "type", void 0);
    return GetPricing200ApplicationJsonPricingFloatingIps;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingFloatingIps };
var GetPricing200ApplicationJsonPricingImagePricePerGbMonth = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingImagePricePerGbMonth, _super);
    function GetPricing200ApplicationJsonPricingImagePricePerGbMonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingImagePricePerGbMonth.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingImagePricePerGbMonth.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingImagePricePerGbMonth;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingImagePricePerGbMonth };
// GetPricing200ApplicationJsonPricingImage
/**
 * The cost of Image per GB/month
**/
var GetPricing200ApplicationJsonPricingImage = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingImage, _super);
    function GetPricing200ApplicationJsonPricingImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_per_gb_month" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingImagePricePerGbMonth)
    ], GetPricing200ApplicationJsonPricingImage.prototype, "pricePerGbMonth", void 0);
    return GetPricing200ApplicationJsonPricingImage;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingImage };
// GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly
/**
 * Hourly costs for a Load Balancer type in this network zone
**/
var GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly, _super);
    function GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly };
// GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly
/**
 * Monthly costs for a Load Balancer type in this network zone
**/
var GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly, _super);
    function GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly };
var GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices, _super);
    function GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceHourly)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingLoadBalancerTypesPricesPriceMonthly)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices.prototype, "priceMonthly", void 0);
    return GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices };
var GetPricing200ApplicationJsonPricingLoadBalancerTypes = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingLoadBalancerTypes, _super);
    function GetPricing200ApplicationJsonPricingLoadBalancerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetPricing200ApplicationJsonPricingLoadBalancerTypesPrices }),
        __metadata("design:type", Array)
    ], GetPricing200ApplicationJsonPricingLoadBalancerTypes.prototype, "prices", void 0);
    return GetPricing200ApplicationJsonPricingLoadBalancerTypes;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingLoadBalancerTypes };
// GetPricing200ApplicationJsonPricingServerBackup
/**
 * Will increase base Server costs by specific percentage
**/
var GetPricing200ApplicationJsonPricingServerBackup = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingServerBackup, _super);
    function GetPricing200ApplicationJsonPricingServerBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerBackup.prototype, "percentage", void 0);
    return GetPricing200ApplicationJsonPricingServerBackup;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingServerBackup };
// GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly, _super);
    function GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly };
// GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly, _super);
    function GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly };
var GetPricing200ApplicationJsonPricingServerTypesPrices = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingServerTypesPrices, _super);
    function GetPricing200ApplicationJsonPricingServerTypesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerTypesPrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingServerTypesPricesPriceHourly)
    ], GetPricing200ApplicationJsonPricingServerTypesPrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingServerTypesPricesPriceMonthly)
    ], GetPricing200ApplicationJsonPricingServerTypesPrices.prototype, "priceMonthly", void 0);
    return GetPricing200ApplicationJsonPricingServerTypesPrices;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingServerTypesPrices };
var GetPricing200ApplicationJsonPricingServerTypes = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingServerTypes, _super);
    function GetPricing200ApplicationJsonPricingServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPricing200ApplicationJsonPricingServerTypes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingServerTypes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetPricing200ApplicationJsonPricingServerTypesPrices }),
        __metadata("design:type", Array)
    ], GetPricing200ApplicationJsonPricingServerTypes.prototype, "prices", void 0);
    return GetPricing200ApplicationJsonPricingServerTypes;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingServerTypes };
var GetPricing200ApplicationJsonPricingTrafficPricePerTb = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingTrafficPricePerTb, _super);
    function GetPricing200ApplicationJsonPricingTrafficPricePerTb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingTrafficPricePerTb.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingTrafficPricePerTb.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingTrafficPricePerTb;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingTrafficPricePerTb };
// GetPricing200ApplicationJsonPricingTraffic
/**
 * The cost of additional traffic per TB
**/
var GetPricing200ApplicationJsonPricingTraffic = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingTraffic, _super);
    function GetPricing200ApplicationJsonPricingTraffic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_per_tb" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingTrafficPricePerTb)
    ], GetPricing200ApplicationJsonPricingTraffic.prototype, "pricePerTb", void 0);
    return GetPricing200ApplicationJsonPricingTraffic;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingTraffic };
var GetPricing200ApplicationJsonPricingVolumePricePerGbMonth = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingVolumePricePerGbMonth, _super);
    function GetPricing200ApplicationJsonPricingVolumePricePerGbMonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingVolumePricePerGbMonth.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricingVolumePricePerGbMonth.prototype, "net", void 0);
    return GetPricing200ApplicationJsonPricingVolumePricePerGbMonth;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingVolumePricePerGbMonth };
// GetPricing200ApplicationJsonPricingVolume
/**
 * The cost of Volume per GB/month
**/
var GetPricing200ApplicationJsonPricingVolume = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricingVolume, _super);
    function GetPricing200ApplicationJsonPricingVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_per_gb_month" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingVolumePricePerGbMonth)
    ], GetPricing200ApplicationJsonPricingVolume.prototype, "pricePerGbMonth", void 0);
    return GetPricing200ApplicationJsonPricingVolume;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricingVolume };
var GetPricing200ApplicationJsonPricing = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJsonPricing, _super);
    function GetPricing200ApplicationJsonPricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricing.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ip" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingFloatingIp)
    ], GetPricing200ApplicationJsonPricing.prototype, "floatingIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ips", elemType: GetPricing200ApplicationJsonPricingFloatingIps }),
        __metadata("design:type", Array)
    ], GetPricing200ApplicationJsonPricing.prototype, "floatingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingImage)
    ], GetPricing200ApplicationJsonPricing.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_types", elemType: GetPricing200ApplicationJsonPricingLoadBalancerTypes }),
        __metadata("design:type", Array)
    ], GetPricing200ApplicationJsonPricing.prototype, "loadBalancerTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_backup" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingServerBackup)
    ], GetPricing200ApplicationJsonPricing.prototype, "serverBackup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types", elemType: GetPricing200ApplicationJsonPricingServerTypes }),
        __metadata("design:type", Array)
    ], GetPricing200ApplicationJsonPricing.prototype, "serverTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingTraffic)
    ], GetPricing200ApplicationJsonPricing.prototype, "traffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vat_rate" }),
        __metadata("design:type", String)
    ], GetPricing200ApplicationJsonPricing.prototype, "vatRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricingVolume)
    ], GetPricing200ApplicationJsonPricing.prototype, "volume", void 0);
    return GetPricing200ApplicationJsonPricing;
}(SpeakeasyBase));
export { GetPricing200ApplicationJsonPricing };
var GetPricing200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPricing200ApplicationJson, _super);
    function GetPricing200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing" }),
        __metadata("design:type", GetPricing200ApplicationJsonPricing)
    ], GetPricing200ApplicationJson.prototype, "pricing", void 0);
    return GetPricing200ApplicationJson;
}(SpeakeasyBase));
export { GetPricing200ApplicationJson };
var GetPricingResponse = /** @class */ (function (_super) {
    __extends(GetPricingResponse, _super);
    function GetPricingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPricingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPricing200ApplicationJson)
    ], GetPricingResponse.prototype, "getPricing200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPricingResponse.prototype, "statusCode", void 0);
    return GetPricingResponse;
}(SpeakeasyBase));
export { GetPricingResponse };

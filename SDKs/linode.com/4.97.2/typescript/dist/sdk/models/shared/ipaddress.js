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
export var IpAddressTypeEnum;
(function (IpAddressTypeEnum) {
    IpAddressTypeEnum["Ipv4"] = "ipv4";
    IpAddressTypeEnum["Ipv6"] = "ipv6";
    IpAddressTypeEnum["Ipv6Pool"] = "ipv6/pool";
    IpAddressTypeEnum["Ipv6Range"] = "ipv6/range";
})(IpAddressTypeEnum || (IpAddressTypeEnum = {}));
// IpAddress
/**
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 *
**/
var IpAddress = /** @class */ (function (_super) {
    __extends(IpAddress, _super);
    function IpAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode_id" }),
        __metadata("design:type", Number)
    ], IpAddress.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", Number)
    ], IpAddress.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], IpAddress.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rdns" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "rdns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet_mask" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "subnetMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "type", void 0);
    return IpAddress;
}(SpeakeasyBase));
export { IpAddress };
// IpAddressInput
/**
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 *
**/
var IpAddressInput = /** @class */ (function (_super) {
    __extends(IpAddressInput, _super);
    function IpAddressInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rdns" }),
        __metadata("design:type", String)
    ], IpAddressInput.prototype, "rdns", void 0);
    return IpAddressInput;
}(SpeakeasyBase));
export { IpAddressInput };

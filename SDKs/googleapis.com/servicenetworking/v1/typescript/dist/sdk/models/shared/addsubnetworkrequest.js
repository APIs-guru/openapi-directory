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
import { SecondaryIpRangeSpec } from "./secondaryiprangespec";
// AddSubnetworkRequest
/**
 * Request to create a subnetwork in a previously peered service network.
**/
var AddSubnetworkRequest = /** @class */ (function (_super) {
    __extends(AddSubnetworkRequest, _super);
    function AddSubnetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkServiceNetworkingUsePermission" }),
        __metadata("design:type", Boolean)
    ], AddSubnetworkRequest.prototype, "checkServiceNetworkingUsePermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeIdempotencyWindow" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "computeIdempotencyWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumer" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "consumer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerNetwork" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "consumerNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipPrefixLength" }),
        __metadata("design:type", Number)
    ], AddSubnetworkRequest.prototype, "ipPrefixLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outsideAllocationPublicIpRange" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "outsideAllocationPublicIpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIpv6GoogleAccess" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "privateIpv6GoogleAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedAddress" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "requestedAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedRanges" }),
        __metadata("design:type", Array)
    ], AddSubnetworkRequest.prototype, "requestedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryIpRangeSpecs", elemType: SecondaryIpRangeSpec }),
        __metadata("design:type", Array)
    ], AddSubnetworkRequest.prototype, "secondaryIpRangeSpecs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], AddSubnetworkRequest.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetworkUsers" }),
        __metadata("design:type", Array)
    ], AddSubnetworkRequest.prototype, "subnetworkUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useCustomComputeIdempotencyWindow" }),
        __metadata("design:type", Boolean)
    ], AddSubnetworkRequest.prototype, "useCustomComputeIdempotencyWindow", void 0);
    return AddSubnetworkRequest;
}(SpeakeasyBase));
export { AddSubnetworkRequest };

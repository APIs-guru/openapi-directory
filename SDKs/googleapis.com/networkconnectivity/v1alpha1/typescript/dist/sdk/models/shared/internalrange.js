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
export var InternalRangeOverlapsEnum;
(function (InternalRangeOverlapsEnum) {
    InternalRangeOverlapsEnum["OverlapUnspecified"] = "OVERLAP_UNSPECIFIED";
    InternalRangeOverlapsEnum["OverlapRouteRange"] = "OVERLAP_ROUTE_RANGE";
})(InternalRangeOverlapsEnum || (InternalRangeOverlapsEnum = {}));
export var InternalRangePeeringEnum;
(function (InternalRangePeeringEnum) {
    InternalRangePeeringEnum["PeeringUnspecified"] = "PEERING_UNSPECIFIED";
    InternalRangePeeringEnum["ForSelf"] = "FOR_SELF";
    InternalRangePeeringEnum["ForPeer"] = "FOR_PEER";
    InternalRangePeeringEnum["NotShared"] = "NOT_SHARED";
})(InternalRangePeeringEnum || (InternalRangePeeringEnum = {}));
export var InternalRangeUsageEnum;
(function (InternalRangeUsageEnum) {
    InternalRangeUsageEnum["UsageUnspecified"] = "USAGE_UNSPECIFIED";
    InternalRangeUsageEnum["ForVpc"] = "FOR_VPC";
    InternalRangeUsageEnum["ExternalToVpc"] = "EXTERNAL_TO_VPC";
})(InternalRangeUsageEnum || (InternalRangeUsageEnum = {}));
// InternalRangeInput
/**
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
var InternalRangeInput = /** @class */ (function (_super) {
    __extends(InternalRangeInput, _super);
    function InternalRangeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipCidrRange" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "ipCidrRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InternalRangeInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overlaps" }),
        __metadata("design:type", Array)
    ], InternalRangeInput.prototype, "overlaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peering" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "peering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefixLength" }),
        __metadata("design:type", Number)
    ], InternalRangeInput.prototype, "prefixLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCidrRange" }),
        __metadata("design:type", Array)
    ], InternalRangeInput.prototype, "targetCidrRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", String)
    ], InternalRangeInput.prototype, "usage", void 0);
    return InternalRangeInput;
}(SpeakeasyBase));
export { InternalRangeInput };
// InternalRange
/**
 * The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
**/
var InternalRange = /** @class */ (function (_super) {
    __extends(InternalRange, _super);
    function InternalRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipCidrRange" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "ipCidrRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InternalRange.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overlaps" }),
        __metadata("design:type", Array)
    ], InternalRange.prototype, "overlaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peering" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "peering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefixLength" }),
        __metadata("design:type", Number)
    ], InternalRange.prototype, "prefixLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCidrRange" }),
        __metadata("design:type", Array)
    ], InternalRange.prototype, "targetCidrRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", String)
    ], InternalRange.prototype, "usage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], InternalRange.prototype, "users", void 0);
    return InternalRange;
}(SpeakeasyBase));
export { InternalRange };

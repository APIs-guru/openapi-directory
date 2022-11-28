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
import { ManagedZoneCloudLoggingConfig } from "./managedzonecloudloggingconfig";
import { ManagedZoneDnsSecConfig } from "./managedzonednssecconfig";
import { ManagedZoneForwardingConfig } from "./managedzoneforwardingconfig";
import { ManagedZonePeeringConfig } from "./managedzonepeeringconfig";
import { ManagedZonePrivateVisibilityConfig } from "./managedzoneprivatevisibilityconfig";
import { ManagedZoneReverseLookupConfig } from "./managedzonereverselookupconfig";
import { ManagedZoneServiceDirectoryConfig } from "./managedzoneservicedirectoryconfig";
export var ManagedZoneVisibilityEnum;
(function (ManagedZoneVisibilityEnum) {
    ManagedZoneVisibilityEnum["Public"] = "PUBLIC";
    ManagedZoneVisibilityEnum["Private"] = "PRIVATE";
})(ManagedZoneVisibilityEnum || (ManagedZoneVisibilityEnum = {}));
// ManagedZone
/**
 * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
**/
var ManagedZone = /** @class */ (function (_super) {
    __extends(ManagedZone, _super);
    function ManagedZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudLoggingConfig" }),
        __metadata("design:type", ManagedZoneCloudLoggingConfig)
    ], ManagedZone.prototype, "cloudLoggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsName" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnssecConfig" }),
        __metadata("design:type", ManagedZoneDnsSecConfig)
    ], ManagedZone.prototype, "dnssecConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardingConfig" }),
        __metadata("design:type", ManagedZoneForwardingConfig)
    ], ManagedZone.prototype, "forwardingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ManagedZone.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameServerSet" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "nameServerSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameServers" }),
        __metadata("design:type", Array)
    ], ManagedZone.prototype, "nameServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeringConfig" }),
        __metadata("design:type", ManagedZonePeeringConfig)
    ], ManagedZone.prototype, "peeringConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateVisibilityConfig" }),
        __metadata("design:type", ManagedZonePrivateVisibilityConfig)
    ], ManagedZone.prototype, "privateVisibilityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reverseLookupConfig" }),
        __metadata("design:type", ManagedZoneReverseLookupConfig)
    ], ManagedZone.prototype, "reverseLookupConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDirectoryConfig" }),
        __metadata("design:type", ManagedZoneServiceDirectoryConfig)
    ], ManagedZone.prototype, "serviceDirectoryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], ManagedZone.prototype, "visibility", void 0);
    return ManagedZone;
}(SpeakeasyBase));
export { ManagedZone };

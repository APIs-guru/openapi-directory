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
export var FirewallDevicesEntityTypeEnum;
(function (FirewallDevicesEntityTypeEnum) {
    FirewallDevicesEntityTypeEnum["Linode"] = "linode";
})(FirewallDevicesEntityTypeEnum || (FirewallDevicesEntityTypeEnum = {}));
// FirewallDevicesEntity
/**
 * The Linode service that this Firewall has been applied to.
 *
**/
var FirewallDevicesEntity = /** @class */ (function (_super) {
    __extends(FirewallDevicesEntity, _super);
    function FirewallDevicesEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FirewallDevicesEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FirewallDevicesEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FirewallDevicesEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], FirewallDevicesEntity.prototype, "url", void 0);
    return FirewallDevicesEntity;
}(SpeakeasyBase));
export { FirewallDevicesEntity };
// FirewallDevices
/**
 * Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
 *
**/
var FirewallDevices = /** @class */ (function (_super) {
    __extends(FirewallDevices, _super);
    function FirewallDevices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], FirewallDevices.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", FirewallDevicesEntity)
    ], FirewallDevices.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FirewallDevices.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], FirewallDevices.prototype, "updated", void 0);
    return FirewallDevices;
}(SpeakeasyBase));
export { FirewallDevices };

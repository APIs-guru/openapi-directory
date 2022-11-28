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
import { RouterApplianceInstance } from "./routerapplianceinstance";
// LinkedRouterApplianceInstances
/**
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
var LinkedRouterApplianceInstances = /** @class */ (function (_super) {
    __extends(LinkedRouterApplianceInstances, _super);
    function LinkedRouterApplianceInstances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances", elemType: RouterApplianceInstance }),
        __metadata("design:type", Array)
    ], LinkedRouterApplianceInstances.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" }),
        __metadata("design:type", Boolean)
    ], LinkedRouterApplianceInstances.prototype, "siteToSiteDataTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcNetwork" }),
        __metadata("design:type", String)
    ], LinkedRouterApplianceInstances.prototype, "vpcNetwork", void 0);
    return LinkedRouterApplianceInstances;
}(SpeakeasyBase));
export { LinkedRouterApplianceInstances };
// LinkedRouterApplianceInstancesInput
/**
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
var LinkedRouterApplianceInstancesInput = /** @class */ (function (_super) {
    __extends(LinkedRouterApplianceInstancesInput, _super);
    function LinkedRouterApplianceInstancesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances", elemType: RouterApplianceInstance }),
        __metadata("design:type", Array)
    ], LinkedRouterApplianceInstancesInput.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" }),
        __metadata("design:type", Boolean)
    ], LinkedRouterApplianceInstancesInput.prototype, "siteToSiteDataTransfer", void 0);
    return LinkedRouterApplianceInstancesInput;
}(SpeakeasyBase));
export { LinkedRouterApplianceInstancesInput };

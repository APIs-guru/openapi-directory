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
import { OsPolicyInventoryFilter } from "./ospolicyinventoryfilter";
import { OsPolicyOsFilter } from "./ospolicyosfilter";
import { OsPolicyResource } from "./ospolicyresource";
// OsPolicyResourceGroup
/**
 * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
**/
var OsPolicyResourceGroup = /** @class */ (function (_super) {
    __extends(OsPolicyResourceGroup, _super);
    function OsPolicyResourceGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryFilters", elemType: OsPolicyInventoryFilter }),
        __metadata("design:type", Array)
    ], OsPolicyResourceGroup.prototype, "inventoryFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osFilter" }),
        __metadata("design:type", OsPolicyOsFilter)
    ], OsPolicyResourceGroup.prototype, "osFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: OsPolicyResource }),
        __metadata("design:type", Array)
    ], OsPolicyResourceGroup.prototype, "resources", void 0);
    return OsPolicyResourceGroup;
}(SpeakeasyBase));
export { OsPolicyResourceGroup };

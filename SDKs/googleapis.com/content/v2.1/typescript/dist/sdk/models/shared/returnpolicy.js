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
import { ReturnPolicyPolicy } from "./returnpolicypolicy";
import { Price } from "./price";
import { ReturnPolicySeasonalOverride } from "./returnpolicyseasonaloverride";
// ReturnPolicy
/**
 * Return policy resource.
**/
var ReturnPolicy = /** @class */ (function (_super) {
    __extends(ReturnPolicy, _super);
    function ReturnPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], ReturnPolicy.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ReturnPolicy.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ReturnPolicy.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReturnPolicy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonFreeReturnReasons" }),
        __metadata("design:type", Array)
    ], ReturnPolicy.prototype, "nonFreeReturnReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", ReturnPolicyPolicy)
    ], ReturnPolicy.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPolicyId" }),
        __metadata("design:type", String)
    ], ReturnPolicy.prototype, "returnPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnShippingFee" }),
        __metadata("design:type", Price)
    ], ReturnPolicy.prototype, "returnShippingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonalOverrides", elemType: ReturnPolicySeasonalOverride }),
        __metadata("design:type", Array)
    ], ReturnPolicy.prototype, "seasonalOverrides", void 0);
    return ReturnPolicy;
}(SpeakeasyBase));
export { ReturnPolicy };

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
import { ReturnPolicyOnlinePolicy } from "./returnpolicyonlinepolicy";
import { ReturnPolicyOnlineRestockingFee } from "./returnpolicyonlinerestockingfee";
import { ReturnPolicyOnlineReturnReasonCategoryInfo } from "./returnpolicyonlinereturnreasoncategoryinfo";
export var ReturnPolicyOnlineItemConditionsEnum;
(function (ReturnPolicyOnlineItemConditionsEnum) {
    ReturnPolicyOnlineItemConditionsEnum["ItemConditionUnspecified"] = "ITEM_CONDITION_UNSPECIFIED";
    ReturnPolicyOnlineItemConditionsEnum["New"] = "NEW";
    ReturnPolicyOnlineItemConditionsEnum["Used"] = "USED";
})(ReturnPolicyOnlineItemConditionsEnum || (ReturnPolicyOnlineItemConditionsEnum = {}));
export var ReturnPolicyOnlineReturnMethodsEnum;
(function (ReturnPolicyOnlineReturnMethodsEnum) {
    ReturnPolicyOnlineReturnMethodsEnum["ReturnMethodUnspecified"] = "RETURN_METHOD_UNSPECIFIED";
    ReturnPolicyOnlineReturnMethodsEnum["ByMail"] = "BY_MAIL";
    ReturnPolicyOnlineReturnMethodsEnum["InStore"] = "IN_STORE";
    ReturnPolicyOnlineReturnMethodsEnum["AtAKiosk"] = "AT_A_KIOSK";
})(ReturnPolicyOnlineReturnMethodsEnum || (ReturnPolicyOnlineReturnMethodsEnum = {}));
// ReturnPolicyOnlineInput
/**
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
var ReturnPolicyOnlineInput = /** @class */ (function (_super) {
    __extends(ReturnPolicyOnlineInput, _super);
    function ReturnPolicyOnlineInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countries" }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnlineInput.prototype, "countries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemConditions" }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnlineInput.prototype, "itemConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnlineInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnlineInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", ReturnPolicyOnlinePolicy)
    ], ReturnPolicyOnlineInput.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restockingFee" }),
        __metadata("design:type", ReturnPolicyOnlineRestockingFee)
    ], ReturnPolicyOnlineInput.prototype, "restockingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnMethods" }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnlineInput.prototype, "returnMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPolicyUri" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnlineInput.prototype, "returnPolicyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnReasonCategoryInfo", elemType: ReturnPolicyOnlineReturnReasonCategoryInfo }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnlineInput.prototype, "returnReasonCategoryInfo", void 0);
    return ReturnPolicyOnlineInput;
}(SpeakeasyBase));
export { ReturnPolicyOnlineInput };
// ReturnPolicyOnline
/**
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
var ReturnPolicyOnline = /** @class */ (function (_super) {
    __extends(ReturnPolicyOnline, _super);
    function ReturnPolicyOnline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countries" }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnline.prototype, "countries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemConditions" }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnline.prototype, "itemConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnline.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnline.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", ReturnPolicyOnlinePolicy)
    ], ReturnPolicyOnline.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restockingFee" }),
        __metadata("design:type", ReturnPolicyOnlineRestockingFee)
    ], ReturnPolicyOnline.prototype, "restockingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnMethods" }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnline.prototype, "returnMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPolicyId" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnline.prototype, "returnPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPolicyUri" }),
        __metadata("design:type", String)
    ], ReturnPolicyOnline.prototype, "returnPolicyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnReasonCategoryInfo", elemType: ReturnPolicyOnlineReturnReasonCategoryInfo }),
        __metadata("design:type", Array)
    ], ReturnPolicyOnline.prototype, "returnReasonCategoryInfo", void 0);
    return ReturnPolicyOnline;
}(SpeakeasyBase));
export { ReturnPolicyOnline };

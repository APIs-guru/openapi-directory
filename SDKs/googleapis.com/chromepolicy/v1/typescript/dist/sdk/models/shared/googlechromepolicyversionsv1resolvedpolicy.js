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
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";
// GoogleChromePolicyVersionsV1ResolvedPolicy
/**
 * The resolved value of a policy for a given target.
**/
var GoogleChromePolicyVersionsV1ResolvedPolicy = /** @class */ (function (_super) {
    __extends(GoogleChromePolicyVersionsV1ResolvedPolicy, _super);
    function GoogleChromePolicyVersionsV1ResolvedPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addedSourceKey" }),
        __metadata("design:type", GoogleChromePolicyVersionsV1PolicyTargetKey)
    ], GoogleChromePolicyVersionsV1ResolvedPolicy.prototype, "addedSourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceKey" }),
        __metadata("design:type", GoogleChromePolicyVersionsV1PolicyTargetKey)
    ], GoogleChromePolicyVersionsV1ResolvedPolicy.prototype, "sourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetKey" }),
        __metadata("design:type", GoogleChromePolicyVersionsV1PolicyTargetKey)
    ], GoogleChromePolicyVersionsV1ResolvedPolicy.prototype, "targetKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", GoogleChromePolicyVersionsV1PolicyValue)
    ], GoogleChromePolicyVersionsV1ResolvedPolicy.prototype, "value", void 0);
    return GoogleChromePolicyVersionsV1ResolvedPolicy;
}(SpeakeasyBase));
export { GoogleChromePolicyVersionsV1ResolvedPolicy };

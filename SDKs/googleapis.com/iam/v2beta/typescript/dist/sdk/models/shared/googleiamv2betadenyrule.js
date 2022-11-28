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
import { GoogleTypeExpr } from "./googletypeexpr";
// GoogleIamV2betaDenyRule
/**
 * A deny rule in an IAM deny policy.
**/
var GoogleIamV2betaDenyRule = /** @class */ (function (_super) {
    __extends(GoogleIamV2betaDenyRule, _super);
    function GoogleIamV2betaDenyRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denialCondition" }),
        __metadata("design:type", GoogleTypeExpr)
    ], GoogleIamV2betaDenyRule.prototype, "denialCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deniedPermissions" }),
        __metadata("design:type", Array)
    ], GoogleIamV2betaDenyRule.prototype, "deniedPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deniedPrincipals" }),
        __metadata("design:type", Array)
    ], GoogleIamV2betaDenyRule.prototype, "deniedPrincipals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exceptionPermissions" }),
        __metadata("design:type", Array)
    ], GoogleIamV2betaDenyRule.prototype, "exceptionPermissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exceptionPrincipals" }),
        __metadata("design:type", Array)
    ], GoogleIamV2betaDenyRule.prototype, "exceptionPrincipals", void 0);
    return GoogleIamV2betaDenyRule;
}(SpeakeasyBase));
export { GoogleIamV2betaDenyRule };

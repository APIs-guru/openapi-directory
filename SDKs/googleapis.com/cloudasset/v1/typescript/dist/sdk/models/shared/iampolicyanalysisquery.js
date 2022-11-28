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
import { AccessSelector } from "./accessselector";
import { ConditionContext } from "./conditioncontext";
import { IdentitySelector } from "./identityselector";
import { Options } from "./options";
import { ResourceSelector } from "./resourceselector";
// IamPolicyAnalysisQuery
/**
 * IAM policy analysis query message.
**/
var IamPolicyAnalysisQuery = /** @class */ (function (_super) {
    __extends(IamPolicyAnalysisQuery, _super);
    function IamPolicyAnalysisQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessSelector" }),
        __metadata("design:type", AccessSelector)
    ], IamPolicyAnalysisQuery.prototype, "accessSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionContext" }),
        __metadata("design:type", ConditionContext)
    ], IamPolicyAnalysisQuery.prototype, "conditionContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identitySelector" }),
        __metadata("design:type", IdentitySelector)
    ], IamPolicyAnalysisQuery.prototype, "identitySelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Options)
    ], IamPolicyAnalysisQuery.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSelector" }),
        __metadata("design:type", ResourceSelector)
    ], IamPolicyAnalysisQuery.prototype, "resourceSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], IamPolicyAnalysisQuery.prototype, "scope", void 0);
    return IamPolicyAnalysisQuery;
}(SpeakeasyBase));
export { IamPolicyAnalysisQuery };

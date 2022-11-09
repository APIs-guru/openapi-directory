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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ConditionIamEnum;
(function (ConditionIamEnum) {
    ConditionIamEnum["NoAttr"] = "NO_ATTR";
    ConditionIamEnum["Authority"] = "AUTHORITY";
    ConditionIamEnum["Attribution"] = "ATTRIBUTION";
    ConditionIamEnum["SecurityRealm"] = "SECURITY_REALM";
    ConditionIamEnum["Approver"] = "APPROVER";
    ConditionIamEnum["JustificationType"] = "JUSTIFICATION_TYPE";
    ConditionIamEnum["CredentialsType"] = "CREDENTIALS_TYPE";
    ConditionIamEnum["CredsAssertion"] = "CREDS_ASSERTION";
})(ConditionIamEnum || (ConditionIamEnum = {}));
export var ConditionOpEnum;
(function (ConditionOpEnum) {
    ConditionOpEnum["NoOp"] = "NO_OP";
    ConditionOpEnum["Equals"] = "EQUALS";
    ConditionOpEnum["NotEquals"] = "NOT_EQUALS";
    ConditionOpEnum["In"] = "IN";
    ConditionOpEnum["NotIn"] = "NOT_IN";
    ConditionOpEnum["Discharged"] = "DISCHARGED";
})(ConditionOpEnum || (ConditionOpEnum = {}));
export var ConditionSysEnum;
(function (ConditionSysEnum) {
    ConditionSysEnum["NoAttr"] = "NO_ATTR";
    ConditionSysEnum["Region"] = "REGION";
    ConditionSysEnum["Service"] = "SERVICE";
    ConditionSysEnum["Name"] = "NAME";
    ConditionSysEnum["Ip"] = "IP";
})(ConditionSysEnum || (ConditionSysEnum = {}));
// Condition
/**
 * A condition to be met.
**/
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=iam" }),
        __metadata("design:type", String)
    ], Condition.prototype, "iam", void 0);
    __decorate([
        Metadata({ data: "json, name=op" }),
        __metadata("design:type", String)
    ], Condition.prototype, "op", void 0);
    __decorate([
        Metadata({ data: "json, name=svc" }),
        __metadata("design:type", String)
    ], Condition.prototype, "svc", void 0);
    __decorate([
        Metadata({ data: "json, name=sys" }),
        __metadata("design:type", String)
    ], Condition.prototype, "sys", void 0);
    __decorate([
        Metadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], Condition.prototype, "values", void 0);
    return Condition;
}(SpeakeasyBase));
export { Condition };

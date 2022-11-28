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
// GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues
/**
 * A message that holds specific allowed and denied values. This message can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used.
**/
var GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues = /** @class */ (function (_super) {
    __extends(GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues, _super);
    function GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedValues" }),
        __metadata("design:type", Array)
    ], GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues.prototype, "allowedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deniedValues" }),
        __metadata("design:type", Array)
    ], GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues.prototype, "deniedValues", void 0);
    return GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
}(SpeakeasyBase));
export { GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues };

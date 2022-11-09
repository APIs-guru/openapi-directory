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
export var GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum;
(function (GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum) {
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnspecified"] = "MEMBERSHIP_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipIncluded"] = "MEMBERSHIP_INCLUDED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipNotIncluded"] = "MEMBERSHIP_NOT_INCLUDED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnknownInfoDenied"] = "MEMBERSHIP_UNKNOWN_INFO_DENIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnknownUnsupported"] = "MEMBERSHIP_UNKNOWN_UNSUPPORTED";
})(GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum || (GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum = {}));
export var GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum || (GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum = {}));
// GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership
/**
 * Details about whether the binding includes the principal.
**/
var GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership, _super);
    function GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=membership" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership.prototype, "membership", void 0);
    __decorate([
        Metadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership.prototype, "relevance", void 0);
    return GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership };

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
export var GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum;
(function (GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum) {
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnspecified"] = "MEMBERSHIP_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum["MembershipIncluded"] = "MEMBERSHIP_INCLUDED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum["MembershipNotIncluded"] = "MEMBERSHIP_NOT_INCLUDED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnknownInfoDenied"] = "MEMBERSHIP_UNKNOWN_INFO_DENIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum["MembershipUnknownUnsupported"] = "MEMBERSHIP_UNKNOWN_UNSUPPORTED";
})(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum || (GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum = {}));
export var GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum;
(function (GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum) {
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum["HeuristicRelevanceUnspecified"] = "HEURISTIC_RELEVANCE_UNSPECIFIED";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum["Normal"] = "NORMAL";
    GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum["High"] = "HIGH";
})(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum || (GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum = {}));
// GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership
/**
 * Details about whether the binding includes the member.
**/
var GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership = /** @class */ (function (_super) {
    __extends(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership, _super);
    function GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=membership" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership.prototype, "membership", void 0);
    __decorate([
        Metadata({ data: "json, name=relevance" }),
        __metadata("design:type", String)
    ], GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership.prototype, "relevance", void 0);
    return GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership;
}(SpeakeasyBase));
export { GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership };

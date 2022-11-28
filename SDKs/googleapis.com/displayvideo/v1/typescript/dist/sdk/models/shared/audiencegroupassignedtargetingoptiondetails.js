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
import { FirstAndThirdPartyAudienceGroup } from "./firstandthirdpartyaudiencegroup";
import { GoogleAudienceGroup } from "./googleaudiencegroup";
import { CombinedAudienceGroup } from "./combinedaudiencegroup";
import { CustomListGroup } from "./customlistgroup";
// AudienceGroupAssignedTargetingOptionDetails
/**
 * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
**/
var AudienceGroupAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(AudienceGroupAssignedTargetingOptionDetails, _super);
    function AudienceGroupAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedFirstAndThirdPartyAudienceGroup" }),
        __metadata("design:type", FirstAndThirdPartyAudienceGroup)
    ], AudienceGroupAssignedTargetingOptionDetails.prototype, "excludedFirstAndThirdPartyAudienceGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedGoogleAudienceGroup" }),
        __metadata("design:type", GoogleAudienceGroup)
    ], AudienceGroupAssignedTargetingOptionDetails.prototype, "excludedGoogleAudienceGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedCombinedAudienceGroup" }),
        __metadata("design:type", CombinedAudienceGroup)
    ], AudienceGroupAssignedTargetingOptionDetails.prototype, "includedCombinedAudienceGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedCustomListGroup" }),
        __metadata("design:type", CustomListGroup)
    ], AudienceGroupAssignedTargetingOptionDetails.prototype, "includedCustomListGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedFirstAndThirdPartyAudienceGroups", elemType: FirstAndThirdPartyAudienceGroup }),
        __metadata("design:type", Array)
    ], AudienceGroupAssignedTargetingOptionDetails.prototype, "includedFirstAndThirdPartyAudienceGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedGoogleAudienceGroup" }),
        __metadata("design:type", GoogleAudienceGroup)
    ], AudienceGroupAssignedTargetingOptionDetails.prototype, "includedGoogleAudienceGroup", void 0);
    return AudienceGroupAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { AudienceGroupAssignedTargetingOptionDetails };

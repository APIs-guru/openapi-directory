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
import { LastModifiedInfo } from "./lastmodifiedinfo";
export var ProjectAudienceAgeGroupEnum;
(function (ProjectAudienceAgeGroupEnum) {
    ProjectAudienceAgeGroupEnum["PlanningAudienceAge1824"] = "PLANNING_AUDIENCE_AGE_18_24";
    ProjectAudienceAgeGroupEnum["PlanningAudienceAge2534"] = "PLANNING_AUDIENCE_AGE_25_34";
    ProjectAudienceAgeGroupEnum["PlanningAudienceAge3544"] = "PLANNING_AUDIENCE_AGE_35_44";
    ProjectAudienceAgeGroupEnum["PlanningAudienceAge4554"] = "PLANNING_AUDIENCE_AGE_45_54";
    ProjectAudienceAgeGroupEnum["PlanningAudienceAge5564"] = "PLANNING_AUDIENCE_AGE_55_64";
    ProjectAudienceAgeGroupEnum["PlanningAudienceAge65OrMore"] = "PLANNING_AUDIENCE_AGE_65_OR_MORE";
    ProjectAudienceAgeGroupEnum["PlanningAudienceAgeUnknown"] = "PLANNING_AUDIENCE_AGE_UNKNOWN";
})(ProjectAudienceAgeGroupEnum || (ProjectAudienceAgeGroupEnum = {}));
export var ProjectAudienceGenderEnum;
(function (ProjectAudienceGenderEnum) {
    ProjectAudienceGenderEnum["PlanningAudienceGenderMale"] = "PLANNING_AUDIENCE_GENDER_MALE";
    ProjectAudienceGenderEnum["PlanningAudienceGenderFemale"] = "PLANNING_AUDIENCE_GENDER_FEMALE";
})(ProjectAudienceGenderEnum || (ProjectAudienceGenderEnum = {}));
// Project
/**
 * Contains properties of a Planning project.
**/
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Project.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Project.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceAgeGroup" }),
        __metadata("design:type", String)
    ], Project.prototype, "audienceAgeGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceGender" }),
        __metadata("design:type", String)
    ], Project.prototype, "audienceGender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budget" }),
        __metadata("design:type", String)
    ], Project.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientBillingCode" }),
        __metadata("design:type", String)
    ], Project.prototype, "clientBillingCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], Project.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], Project.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Project.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Project.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overview" }),
        __metadata("design:type", String)
    ], Project.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], Project.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Project.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetClicks" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetClicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetConversions" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCpaNanos" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetCpaNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCpcNanos" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetCpcNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCpmActiveViewNanos" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetCpmActiveViewNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCpmNanos" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetCpmNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetImpressions" }),
        __metadata("design:type", String)
    ], Project.prototype, "targetImpressions", void 0);
    return Project;
}(SpeakeasyBase));
export { Project };

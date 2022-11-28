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
import { Candidate } from "./candidate";
import { ElectoralDistrict } from "./electoraldistrict";
import { Source } from "./source";
export var ContestLevelEnum;
(function (ContestLevelEnum) {
    ContestLevelEnum["International"] = "international";
    ContestLevelEnum["Country"] = "country";
    ContestLevelEnum["AdministrativeArea1"] = "administrativeArea1";
    ContestLevelEnum["Regional"] = "regional";
    ContestLevelEnum["AdministrativeArea2"] = "administrativeArea2";
    ContestLevelEnum["Locality"] = "locality";
    ContestLevelEnum["SubLocality1"] = "subLocality1";
    ContestLevelEnum["SubLocality2"] = "subLocality2";
    ContestLevelEnum["Special"] = "special";
})(ContestLevelEnum || (ContestLevelEnum = {}));
export var ContestRolesEnum;
(function (ContestRolesEnum) {
    ContestRolesEnum["HeadOfState"] = "headOfState";
    ContestRolesEnum["HeadOfGovernment"] = "headOfGovernment";
    ContestRolesEnum["DeputyHeadOfGovernment"] = "deputyHeadOfGovernment";
    ContestRolesEnum["GovernmentOfficer"] = "governmentOfficer";
    ContestRolesEnum["ExecutiveCouncil"] = "executiveCouncil";
    ContestRolesEnum["LegislatorUpperBody"] = "legislatorUpperBody";
    ContestRolesEnum["LegislatorLowerBody"] = "legislatorLowerBody";
    ContestRolesEnum["HighestCourtJudge"] = "highestCourtJudge";
    ContestRolesEnum["Judge"] = "judge";
    ContestRolesEnum["SchoolBoard"] = "schoolBoard";
    ContestRolesEnum["SpecialPurposeOfficer"] = "specialPurposeOfficer";
    ContestRolesEnum["OtherRole"] = "otherRole";
})(ContestRolesEnum || (ContestRolesEnum = {}));
// Contest
/**
 * Information about a contest that appears on a voter's ballot.
**/
var Contest = /** @class */ (function (_super) {
    __extends(Contest, _super);
    function Contest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ballotPlacement" }),
        __metadata("design:type", String)
    ], Contest.prototype, "ballotPlacement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ballotTitle" }),
        __metadata("design:type", String)
    ], Contest.prototype, "ballotTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidates", elemType: Candidate }),
        __metadata("design:type", Array)
    ], Contest.prototype, "candidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=district" }),
        __metadata("design:type", ElectoralDistrict)
    ], Contest.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=electorateSpecifications" }),
        __metadata("design:type", String)
    ], Contest.prototype, "electorateSpecifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", Array)
    ], Contest.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberElected" }),
        __metadata("design:type", String)
    ], Contest.prototype, "numberElected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberVotingFor" }),
        __metadata("design:type", String)
    ], Contest.prototype, "numberVotingFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office" }),
        __metadata("design:type", String)
    ], Contest.prototype, "office", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryParties" }),
        __metadata("design:type", Array)
    ], Contest.prototype, "primaryParties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryParty" }),
        __metadata("design:type", String)
    ], Contest.prototype, "primaryParty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumBallotResponses" }),
        __metadata("design:type", Array)
    ], Contest.prototype, "referendumBallotResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumBrief" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumBrief", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumConStatement" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumConStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumEffectOfAbstain" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumEffectOfAbstain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumPassageThreshold" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumPassageThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumProStatement" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumProStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumSubtitle" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumSubtitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumText" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumTitle" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referendumUrl" }),
        __metadata("design:type", String)
    ], Contest.prototype, "referendumUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], Contest.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Source }),
        __metadata("design:type", Array)
    ], Contest.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=special" }),
        __metadata("design:type", String)
    ], Contest.prototype, "special", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Contest.prototype, "type", void 0);
    return Contest;
}(SpeakeasyBase));
export { Contest };

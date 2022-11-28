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
import { Source } from "./source";
export var OfficeLevelsEnum;
(function (OfficeLevelsEnum) {
    OfficeLevelsEnum["International"] = "international";
    OfficeLevelsEnum["Country"] = "country";
    OfficeLevelsEnum["AdministrativeArea1"] = "administrativeArea1";
    OfficeLevelsEnum["Regional"] = "regional";
    OfficeLevelsEnum["AdministrativeArea2"] = "administrativeArea2";
    OfficeLevelsEnum["Locality"] = "locality";
    OfficeLevelsEnum["SubLocality1"] = "subLocality1";
    OfficeLevelsEnum["SubLocality2"] = "subLocality2";
    OfficeLevelsEnum["Special"] = "special";
})(OfficeLevelsEnum || (OfficeLevelsEnum = {}));
export var OfficeRolesEnum;
(function (OfficeRolesEnum) {
    OfficeRolesEnum["HeadOfState"] = "headOfState";
    OfficeRolesEnum["HeadOfGovernment"] = "headOfGovernment";
    OfficeRolesEnum["DeputyHeadOfGovernment"] = "deputyHeadOfGovernment";
    OfficeRolesEnum["GovernmentOfficer"] = "governmentOfficer";
    OfficeRolesEnum["ExecutiveCouncil"] = "executiveCouncil";
    OfficeRolesEnum["LegislatorUpperBody"] = "legislatorUpperBody";
    OfficeRolesEnum["LegislatorLowerBody"] = "legislatorLowerBody";
    OfficeRolesEnum["HighestCourtJudge"] = "highestCourtJudge";
    OfficeRolesEnum["Judge"] = "judge";
    OfficeRolesEnum["SchoolBoard"] = "schoolBoard";
    OfficeRolesEnum["SpecialPurposeOfficer"] = "specialPurposeOfficer";
    OfficeRolesEnum["OtherRole"] = "otherRole";
})(OfficeRolesEnum || (OfficeRolesEnum = {}));
// Office
/**
 * Information about an Office held by one or more Officials.
**/
var Office = /** @class */ (function (_super) {
    __extends(Office, _super);
    function Office() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=divisionId" }),
        __metadata("design:type", String)
    ], Office.prototype, "divisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=levels" }),
        __metadata("design:type", Array)
    ], Office.prototype, "levels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Office.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=officialIndices" }),
        __metadata("design:type", Array)
    ], Office.prototype, "officialIndices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], Office.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Source }),
        __metadata("design:type", Array)
    ], Office.prototype, "sources", void 0);
    return Office;
}(SpeakeasyBase));
export { Office };

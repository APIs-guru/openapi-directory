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
import * as shared from "../shared";
var CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams, _super);
    function CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ocdId" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams.prototype, "ocdId", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams };
export var CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum;
(function (CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum) {
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["International"] = "international";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["Country"] = "country";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["AdministrativeArea1"] = "administrativeArea1";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["Regional"] = "regional";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["AdministrativeArea2"] = "administrativeArea2";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["Locality"] = "locality";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["SubLocality1"] = "subLocality1";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["SubLocality2"] = "subLocality2";
    CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum["Special"] = "special";
})(CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum || (CivicinfoRepresentativesRepresentativeInfoByDivisionLevelsEnum = {}));
export var CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum;
(function (CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum) {
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["HeadOfState"] = "headOfState";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["HeadOfGovernment"] = "headOfGovernment";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["DeputyHeadOfGovernment"] = "deputyHeadOfGovernment";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["GovernmentOfficer"] = "governmentOfficer";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["ExecutiveCouncil"] = "executiveCouncil";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["LegislatorUpperBody"] = "legislatorUpperBody";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["LegislatorLowerBody"] = "legislatorLowerBody";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["HighestCourtJudge"] = "highestCourtJudge";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["Judge"] = "judge";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["SchoolBoard"] = "schoolBoard";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["SpecialPurposeOfficer"] = "specialPurposeOfficer";
    CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum["OtherRole"] = "otherRole";
})(CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum || (CivicinfoRepresentativesRepresentativeInfoByDivisionRolesEnum = {}));
var CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams, _super);
    function CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=levels" }),
        __metadata("design:type", Array)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "levels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recursive" }),
        __metadata("design:type", Boolean)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roles" }),
        __metadata("design:type", Array)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams.prototype, "uploadProtocol", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams };
var CivicinfoRepresentativesRepresentativeInfoByDivisionRequest = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByDivisionRequest, _super);
    function CivicinfoRepresentativesRepresentativeInfoByDivisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CivicinfoRepresentativesRepresentativeInfoByDivisionPathParams)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CivicinfoRepresentativesRepresentativeInfoByDivisionQueryParams)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionRequest.prototype, "queryParams", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByDivisionRequest;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByDivisionRequest };
var CivicinfoRepresentativesRepresentativeInfoByDivisionResponse = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByDivisionResponse, _super);
    function CivicinfoRepresentativesRepresentativeInfoByDivisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RepresentativeInfoData)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionResponse.prototype, "representativeInfoData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CivicinfoRepresentativesRepresentativeInfoByDivisionResponse.prototype, "statusCode", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByDivisionResponse;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByDivisionResponse };

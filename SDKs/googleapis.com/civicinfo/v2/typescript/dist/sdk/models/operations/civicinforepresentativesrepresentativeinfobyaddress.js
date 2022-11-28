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
export var CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum;
(function (CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum) {
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["International"] = "international";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["Country"] = "country";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["AdministrativeArea1"] = "administrativeArea1";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["Regional"] = "regional";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["AdministrativeArea2"] = "administrativeArea2";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["Locality"] = "locality";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["SubLocality1"] = "subLocality1";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["SubLocality2"] = "subLocality2";
    CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum["Special"] = "special";
})(CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum || (CivicinfoRepresentativesRepresentativeInfoByAddressLevelsEnum = {}));
export var CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum;
(function (CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum) {
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["HeadOfState"] = "headOfState";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["HeadOfGovernment"] = "headOfGovernment";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["DeputyHeadOfGovernment"] = "deputyHeadOfGovernment";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["GovernmentOfficer"] = "governmentOfficer";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["ExecutiveCouncil"] = "executiveCouncil";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["LegislatorUpperBody"] = "legislatorUpperBody";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["LegislatorLowerBody"] = "legislatorLowerBody";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["HighestCourtJudge"] = "highestCourtJudge";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["Judge"] = "judge";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["SchoolBoard"] = "schoolBoard";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["SpecialPurposeOfficer"] = "specialPurposeOfficer";
    CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum["OtherRole"] = "otherRole";
})(CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum || (CivicinfoRepresentativesRepresentativeInfoByAddressRolesEnum = {}));
var CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams, _super);
    function CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeOffices" }),
        __metadata("design:type", Boolean)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "includeOffices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=levels" }),
        __metadata("design:type", Array)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "levels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roles" }),
        __metadata("design:type", Array)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams.prototype, "uploadProtocol", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams };
var CivicinfoRepresentativesRepresentativeInfoByAddressRequest = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByAddressRequest, _super);
    function CivicinfoRepresentativesRepresentativeInfoByAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CivicinfoRepresentativesRepresentativeInfoByAddressQueryParams)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressRequest.prototype, "queryParams", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByAddressRequest;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByAddressRequest };
var CivicinfoRepresentativesRepresentativeInfoByAddressResponse = /** @class */ (function (_super) {
    __extends(CivicinfoRepresentativesRepresentativeInfoByAddressResponse, _super);
    function CivicinfoRepresentativesRepresentativeInfoByAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RepresentativeInfoResponse)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressResponse.prototype, "representativeInfoResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CivicinfoRepresentativesRepresentativeInfoByAddressResponse.prototype, "statusCode", void 0);
    return CivicinfoRepresentativesRepresentativeInfoByAddressResponse;
}(SpeakeasyBase));
export { CivicinfoRepresentativesRepresentativeInfoByAddressResponse };

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
import { CompanyDerivedInfo } from "./companyderivedinfo";
export var CompanySizeEnum;
(function (CompanySizeEnum) {
    CompanySizeEnum["CompanySizeUnspecified"] = "COMPANY_SIZE_UNSPECIFIED";
    CompanySizeEnum["Mini"] = "MINI";
    CompanySizeEnum["Small"] = "SMALL";
    CompanySizeEnum["Smedium"] = "SMEDIUM";
    CompanySizeEnum["Medium"] = "MEDIUM";
    CompanySizeEnum["Big"] = "BIG";
    CompanySizeEnum["Bigger"] = "BIGGER";
    CompanySizeEnum["Giant"] = "GIANT";
})(CompanySizeEnum || (CompanySizeEnum = {}));
// Company
/**
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=careerSiteUri" }),
        __metadata("design:type", String)
    ], Company.prototype, "careerSiteUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derivedInfo" }),
        __metadata("design:type", CompanyDerivedInfo)
    ], Company.prototype, "derivedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Company.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eeoText" }),
        __metadata("design:type", String)
    ], Company.prototype, "eeoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], Company.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headquartersAddress" }),
        __metadata("design:type", String)
    ], Company.prototype, "headquartersAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiringAgency" }),
        __metadata("design:type", Boolean)
    ], Company.prototype, "hiringAgency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUri" }),
        __metadata("design:type", String)
    ], Company.prototype, "imageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordSearchableJobCustomAttributes" }),
        __metadata("design:type", Array)
    ], Company.prototype, "keywordSearchableJobCustomAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Company.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], Company.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], Company.prototype, "suspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUri" }),
        __metadata("design:type", String)
    ], Company.prototype, "websiteUri", void 0);
    return Company;
}(SpeakeasyBase));
export { Company };
// CompanyInput
/**
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
var CompanyInput = /** @class */ (function (_super) {
    __extends(CompanyInput, _super);
    function CompanyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=careerSiteUri" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "careerSiteUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derivedInfo" }),
        __metadata("design:type", CompanyDerivedInfo)
    ], CompanyInput.prototype, "derivedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eeoText" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "eeoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalId" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headquartersAddress" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "headquartersAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiringAgency" }),
        __metadata("design:type", Boolean)
    ], CompanyInput.prototype, "hiringAgency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUri" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "imageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordSearchableJobCustomAttributes" }),
        __metadata("design:type", Array)
    ], CompanyInput.prototype, "keywordSearchableJobCustomAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUri" }),
        __metadata("design:type", String)
    ], CompanyInput.prototype, "websiteUri", void 0);
    return CompanyInput;
}(SpeakeasyBase));
export { CompanyInput };

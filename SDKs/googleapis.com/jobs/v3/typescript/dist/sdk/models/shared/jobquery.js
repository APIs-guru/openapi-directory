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
import { CommuteFilter } from "./commutefilter";
import { CompensationFilter } from "./compensationfilter";
import { LocationFilter } from "./locationfilter";
import { TimestampRange } from "./timestamprange";
export var JobQueryEmploymentTypesEnum;
(function (JobQueryEmploymentTypesEnum) {
    JobQueryEmploymentTypesEnum["EmploymentTypeUnspecified"] = "EMPLOYMENT_TYPE_UNSPECIFIED";
    JobQueryEmploymentTypesEnum["FullTime"] = "FULL_TIME";
    JobQueryEmploymentTypesEnum["PartTime"] = "PART_TIME";
    JobQueryEmploymentTypesEnum["Contractor"] = "CONTRACTOR";
    JobQueryEmploymentTypesEnum["ContractToHire"] = "CONTRACT_TO_HIRE";
    JobQueryEmploymentTypesEnum["Temporary"] = "TEMPORARY";
    JobQueryEmploymentTypesEnum["Intern"] = "INTERN";
    JobQueryEmploymentTypesEnum["Volunteer"] = "VOLUNTEER";
    JobQueryEmploymentTypesEnum["PerDiem"] = "PER_DIEM";
    JobQueryEmploymentTypesEnum["FlyInFlyOut"] = "FLY_IN_FLY_OUT";
    JobQueryEmploymentTypesEnum["OtherEmploymentType"] = "OTHER_EMPLOYMENT_TYPE";
})(JobQueryEmploymentTypesEnum || (JobQueryEmploymentTypesEnum = {}));
export var JobQueryJobCategoriesEnum;
(function (JobQueryJobCategoriesEnum) {
    JobQueryJobCategoriesEnum["JobCategoryUnspecified"] = "JOB_CATEGORY_UNSPECIFIED";
    JobQueryJobCategoriesEnum["AccountingAndFinance"] = "ACCOUNTING_AND_FINANCE";
    JobQueryJobCategoriesEnum["AdministrativeAndOffice"] = "ADMINISTRATIVE_AND_OFFICE";
    JobQueryJobCategoriesEnum["AdvertisingAndMarketing"] = "ADVERTISING_AND_MARKETING";
    JobQueryJobCategoriesEnum["AnimalCare"] = "ANIMAL_CARE";
    JobQueryJobCategoriesEnum["ArtFashionAndDesign"] = "ART_FASHION_AND_DESIGN";
    JobQueryJobCategoriesEnum["BusinessOperations"] = "BUSINESS_OPERATIONS";
    JobQueryJobCategoriesEnum["CleaningAndFacilities"] = "CLEANING_AND_FACILITIES";
    JobQueryJobCategoriesEnum["ComputerAndIt"] = "COMPUTER_AND_IT";
    JobQueryJobCategoriesEnum["Construction"] = "CONSTRUCTION";
    JobQueryJobCategoriesEnum["CustomerService"] = "CUSTOMER_SERVICE";
    JobQueryJobCategoriesEnum["Education"] = "EDUCATION";
    JobQueryJobCategoriesEnum["EntertainmentAndTravel"] = "ENTERTAINMENT_AND_TRAVEL";
    JobQueryJobCategoriesEnum["FarmingAndOutdoors"] = "FARMING_AND_OUTDOORS";
    JobQueryJobCategoriesEnum["Healthcare"] = "HEALTHCARE";
    JobQueryJobCategoriesEnum["HumanResources"] = "HUMAN_RESOURCES";
    JobQueryJobCategoriesEnum["InstallationMaintenanceAndRepair"] = "INSTALLATION_MAINTENANCE_AND_REPAIR";
    JobQueryJobCategoriesEnum["Legal"] = "LEGAL";
    JobQueryJobCategoriesEnum["Management"] = "MANAGEMENT";
    JobQueryJobCategoriesEnum["ManufacturingAndWarehouse"] = "MANUFACTURING_AND_WAREHOUSE";
    JobQueryJobCategoriesEnum["MediaCommunicationsAndWriting"] = "MEDIA_COMMUNICATIONS_AND_WRITING";
    JobQueryJobCategoriesEnum["OilGasAndMining"] = "OIL_GAS_AND_MINING";
    JobQueryJobCategoriesEnum["PersonalCareAndServices"] = "PERSONAL_CARE_AND_SERVICES";
    JobQueryJobCategoriesEnum["ProtectiveServices"] = "PROTECTIVE_SERVICES";
    JobQueryJobCategoriesEnum["RealEstate"] = "REAL_ESTATE";
    JobQueryJobCategoriesEnum["RestaurantAndHospitality"] = "RESTAURANT_AND_HOSPITALITY";
    JobQueryJobCategoriesEnum["SalesAndRetail"] = "SALES_AND_RETAIL";
    JobQueryJobCategoriesEnum["ScienceAndEngineering"] = "SCIENCE_AND_ENGINEERING";
    JobQueryJobCategoriesEnum["SocialServicesAndNonProfit"] = "SOCIAL_SERVICES_AND_NON_PROFIT";
    JobQueryJobCategoriesEnum["SportsFitnessAndRecreation"] = "SPORTS_FITNESS_AND_RECREATION";
    JobQueryJobCategoriesEnum["TransportationAndLogistics"] = "TRANSPORTATION_AND_LOGISTICS";
})(JobQueryJobCategoriesEnum || (JobQueryJobCategoriesEnum = {}));
// JobQuery
/**
 * Input only. The query required to perform a search query.
**/
var JobQuery = /** @class */ (function (_super) {
    __extends(JobQuery, _super);
    function JobQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commuteFilter" }),
        __metadata("design:type", CommuteFilter)
    ], JobQuery.prototype, "commuteFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyDisplayNames" }),
        __metadata("design:type", Array)
    ], JobQuery.prototype, "companyDisplayNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyNames" }),
        __metadata("design:type", Array)
    ], JobQuery.prototype, "companyNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compensationFilter" }),
        __metadata("design:type", CompensationFilter)
    ], JobQuery.prototype, "compensationFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttributeFilter" }),
        __metadata("design:type", String)
    ], JobQuery.prototype, "customAttributeFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableSpellCheck" }),
        __metadata("design:type", Boolean)
    ], JobQuery.prototype, "disableSpellCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employmentTypes" }),
        __metadata("design:type", Array)
    ], JobQuery.prototype, "employmentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobCategories" }),
        __metadata("design:type", Array)
    ], JobQuery.prototype, "jobCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCodes" }),
        __metadata("design:type", Array)
    ], JobQuery.prototype, "languageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationFilters", elemType: LocationFilter }),
        __metadata("design:type", Array)
    ], JobQuery.prototype, "locationFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTimeRange" }),
        __metadata("design:type", TimestampRange)
    ], JobQuery.prototype, "publishTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], JobQuery.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryLanguageCode" }),
        __metadata("design:type", String)
    ], JobQuery.prototype, "queryLanguageCode", void 0);
    return JobQuery;
}(SpeakeasyBase));
export { JobQuery };

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
import { Location } from "./location";
export var JobDerivedInfoJobCategoriesEnum;
(function (JobDerivedInfoJobCategoriesEnum) {
    JobDerivedInfoJobCategoriesEnum["JobCategoryUnspecified"] = "JOB_CATEGORY_UNSPECIFIED";
    JobDerivedInfoJobCategoriesEnum["AccountingAndFinance"] = "ACCOUNTING_AND_FINANCE";
    JobDerivedInfoJobCategoriesEnum["AdministrativeAndOffice"] = "ADMINISTRATIVE_AND_OFFICE";
    JobDerivedInfoJobCategoriesEnum["AdvertisingAndMarketing"] = "ADVERTISING_AND_MARKETING";
    JobDerivedInfoJobCategoriesEnum["AnimalCare"] = "ANIMAL_CARE";
    JobDerivedInfoJobCategoriesEnum["ArtFashionAndDesign"] = "ART_FASHION_AND_DESIGN";
    JobDerivedInfoJobCategoriesEnum["BusinessOperations"] = "BUSINESS_OPERATIONS";
    JobDerivedInfoJobCategoriesEnum["CleaningAndFacilities"] = "CLEANING_AND_FACILITIES";
    JobDerivedInfoJobCategoriesEnum["ComputerAndIt"] = "COMPUTER_AND_IT";
    JobDerivedInfoJobCategoriesEnum["Construction"] = "CONSTRUCTION";
    JobDerivedInfoJobCategoriesEnum["CustomerService"] = "CUSTOMER_SERVICE";
    JobDerivedInfoJobCategoriesEnum["Education"] = "EDUCATION";
    JobDerivedInfoJobCategoriesEnum["EntertainmentAndTravel"] = "ENTERTAINMENT_AND_TRAVEL";
    JobDerivedInfoJobCategoriesEnum["FarmingAndOutdoors"] = "FARMING_AND_OUTDOORS";
    JobDerivedInfoJobCategoriesEnum["Healthcare"] = "HEALTHCARE";
    JobDerivedInfoJobCategoriesEnum["HumanResources"] = "HUMAN_RESOURCES";
    JobDerivedInfoJobCategoriesEnum["InstallationMaintenanceAndRepair"] = "INSTALLATION_MAINTENANCE_AND_REPAIR";
    JobDerivedInfoJobCategoriesEnum["Legal"] = "LEGAL";
    JobDerivedInfoJobCategoriesEnum["Management"] = "MANAGEMENT";
    JobDerivedInfoJobCategoriesEnum["ManufacturingAndWarehouse"] = "MANUFACTURING_AND_WAREHOUSE";
    JobDerivedInfoJobCategoriesEnum["MediaCommunicationsAndWriting"] = "MEDIA_COMMUNICATIONS_AND_WRITING";
    JobDerivedInfoJobCategoriesEnum["OilGasAndMining"] = "OIL_GAS_AND_MINING";
    JobDerivedInfoJobCategoriesEnum["PersonalCareAndServices"] = "PERSONAL_CARE_AND_SERVICES";
    JobDerivedInfoJobCategoriesEnum["ProtectiveServices"] = "PROTECTIVE_SERVICES";
    JobDerivedInfoJobCategoriesEnum["RealEstate"] = "REAL_ESTATE";
    JobDerivedInfoJobCategoriesEnum["RestaurantAndHospitality"] = "RESTAURANT_AND_HOSPITALITY";
    JobDerivedInfoJobCategoriesEnum["SalesAndRetail"] = "SALES_AND_RETAIL";
    JobDerivedInfoJobCategoriesEnum["ScienceAndEngineering"] = "SCIENCE_AND_ENGINEERING";
    JobDerivedInfoJobCategoriesEnum["SocialServicesAndNonProfit"] = "SOCIAL_SERVICES_AND_NON_PROFIT";
    JobDerivedInfoJobCategoriesEnum["SportsFitnessAndRecreation"] = "SPORTS_FITNESS_AND_RECREATION";
    JobDerivedInfoJobCategoriesEnum["TransportationAndLogistics"] = "TRANSPORTATION_AND_LOGISTICS";
})(JobDerivedInfoJobCategoriesEnum || (JobDerivedInfoJobCategoriesEnum = {}));
// JobDerivedInfo
/**
 * Derived details about the job posting.
**/
var JobDerivedInfo = /** @class */ (function (_super) {
    __extends(JobDerivedInfo, _super);
    function JobDerivedInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobCategories" }),
        __metadata("design:type", Array)
    ], JobDerivedInfo.prototype, "jobCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations", elemType: Location }),
        __metadata("design:type", Array)
    ], JobDerivedInfo.prototype, "locations", void 0);
    return JobDerivedInfo;
}(SpeakeasyBase));
export { JobDerivedInfo };

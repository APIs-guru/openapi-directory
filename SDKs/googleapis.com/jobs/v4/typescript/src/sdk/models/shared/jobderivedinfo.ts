import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";


export enum JobDerivedInfoJobCategoriesEnum {
    JobCategoryUnspecified = "JOB_CATEGORY_UNSPECIFIED",
    AccountingAndFinance = "ACCOUNTING_AND_FINANCE",
    AdministrativeAndOffice = "ADMINISTRATIVE_AND_OFFICE",
    AdvertisingAndMarketing = "ADVERTISING_AND_MARKETING",
    AnimalCare = "ANIMAL_CARE",
    ArtFashionAndDesign = "ART_FASHION_AND_DESIGN",
    BusinessOperations = "BUSINESS_OPERATIONS",
    CleaningAndFacilities = "CLEANING_AND_FACILITIES",
    ComputerAndIt = "COMPUTER_AND_IT",
    Construction = "CONSTRUCTION",
    CustomerService = "CUSTOMER_SERVICE",
    Education = "EDUCATION",
    EntertainmentAndTravel = "ENTERTAINMENT_AND_TRAVEL",
    FarmingAndOutdoors = "FARMING_AND_OUTDOORS",
    Healthcare = "HEALTHCARE",
    HumanResources = "HUMAN_RESOURCES",
    InstallationMaintenanceAndRepair = "INSTALLATION_MAINTENANCE_AND_REPAIR",
    Legal = "LEGAL",
    Management = "MANAGEMENT",
    ManufacturingAndWarehouse = "MANUFACTURING_AND_WAREHOUSE",
    MediaCommunicationsAndWriting = "MEDIA_COMMUNICATIONS_AND_WRITING",
    OilGasAndMining = "OIL_GAS_AND_MINING",
    PersonalCareAndServices = "PERSONAL_CARE_AND_SERVICES",
    ProtectiveServices = "PROTECTIVE_SERVICES",
    RealEstate = "REAL_ESTATE",
    RestaurantAndHospitality = "RESTAURANT_AND_HOSPITALITY",
    SalesAndRetail = "SALES_AND_RETAIL",
    ScienceAndEngineering = "SCIENCE_AND_ENGINEERING",
    SocialServicesAndNonProfit = "SOCIAL_SERVICES_AND_NON_PROFIT",
    SportsFitnessAndRecreation = "SPORTS_FITNESS_AND_RECREATION",
    TransportationAndLogistics = "TRANSPORTATION_AND_LOGISTICS"
}


// JobDerivedInfo
/** 
 * Derived details about the job posting.
**/
export class JobDerivedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobCategories" })
  jobCategories?: JobDerivedInfoJobCategoriesEnum[];

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];
}

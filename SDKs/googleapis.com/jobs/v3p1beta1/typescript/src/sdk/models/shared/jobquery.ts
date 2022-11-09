import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommuteFilter } from "./commutefilter";
import { CompensationFilter } from "./compensationfilter";
import { LocationFilter } from "./locationfilter";
import { TimestampRange } from "./timestamprange";

export enum JobQueryEmploymentTypesEnum {
    EmploymentTypeUnspecified = "EMPLOYMENT_TYPE_UNSPECIFIED"
,    FullTime = "FULL_TIME"
,    PartTime = "PART_TIME"
,    Contractor = "CONTRACTOR"
,    ContractToHire = "CONTRACT_TO_HIRE"
,    Temporary = "TEMPORARY"
,    Intern = "INTERN"
,    Volunteer = "VOLUNTEER"
,    PerDiem = "PER_DIEM"
,    FlyInFlyOut = "FLY_IN_FLY_OUT"
,    OtherEmploymentType = "OTHER_EMPLOYMENT_TYPE"
}

export enum JobQueryJobCategoriesEnum {
    JobCategoryUnspecified = "JOB_CATEGORY_UNSPECIFIED"
,    AccountingAndFinance = "ACCOUNTING_AND_FINANCE"
,    AdministrativeAndOffice = "ADMINISTRATIVE_AND_OFFICE"
,    AdvertisingAndMarketing = "ADVERTISING_AND_MARKETING"
,    AnimalCare = "ANIMAL_CARE"
,    ArtFashionAndDesign = "ART_FASHION_AND_DESIGN"
,    BusinessOperations = "BUSINESS_OPERATIONS"
,    CleaningAndFacilities = "CLEANING_AND_FACILITIES"
,    ComputerAndIt = "COMPUTER_AND_IT"
,    Construction = "CONSTRUCTION"
,    CustomerService = "CUSTOMER_SERVICE"
,    Education = "EDUCATION"
,    EntertainmentAndTravel = "ENTERTAINMENT_AND_TRAVEL"
,    FarmingAndOutdoors = "FARMING_AND_OUTDOORS"
,    Healthcare = "HEALTHCARE"
,    HumanResources = "HUMAN_RESOURCES"
,    InstallationMaintenanceAndRepair = "INSTALLATION_MAINTENANCE_AND_REPAIR"
,    Legal = "LEGAL"
,    Management = "MANAGEMENT"
,    ManufacturingAndWarehouse = "MANUFACTURING_AND_WAREHOUSE"
,    MediaCommunicationsAndWriting = "MEDIA_COMMUNICATIONS_AND_WRITING"
,    OilGasAndMining = "OIL_GAS_AND_MINING"
,    PersonalCareAndServices = "PERSONAL_CARE_AND_SERVICES"
,    ProtectiveServices = "PROTECTIVE_SERVICES"
,    RealEstate = "REAL_ESTATE"
,    RestaurantAndHospitality = "RESTAURANT_AND_HOSPITALITY"
,    SalesAndRetail = "SALES_AND_RETAIL"
,    ScienceAndEngineering = "SCIENCE_AND_ENGINEERING"
,    SocialServicesAndNonProfit = "SOCIAL_SERVICES_AND_NON_PROFIT"
,    SportsFitnessAndRecreation = "SPORTS_FITNESS_AND_RECREATION"
,    TransportationAndLogistics = "TRANSPORTATION_AND_LOGISTICS"
}


// JobQuery
/** 
 * Input only. The query required to perform a search query.
**/
export class JobQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=commuteFilter" })
  commuteFilter?: CommuteFilter;

  @Metadata({ data: "json, name=companyDisplayNames" })
  companyDisplayNames?: string[];

  @Metadata({ data: "json, name=companyNames" })
  companyNames?: string[];

  @Metadata({ data: "json, name=compensationFilter" })
  compensationFilter?: CompensationFilter;

  @Metadata({ data: "json, name=customAttributeFilter" })
  customAttributeFilter?: string;

  @Metadata({ data: "json, name=disableSpellCheck" })
  disableSpellCheck?: boolean;

  @Metadata({ data: "json, name=employmentTypes" })
  employmentTypes?: JobQueryEmploymentTypesEnum[];

  @Metadata({ data: "json, name=excludedJobs" })
  excludedJobs?: string[];

  @Metadata({ data: "json, name=jobCategories" })
  jobCategories?: JobQueryJobCategoriesEnum[];

  @Metadata({ data: "json, name=languageCodes" })
  languageCodes?: string[];

  @Metadata({ data: "json, name=locationFilters", elemType: shared.LocationFilter })
  locationFilters?: LocationFilter[];

  @Metadata({ data: "json, name=publishTimeRange" })
  publishTimeRange?: TimestampRange;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=queryLanguageCode" })
  queryLanguageCode?: string;
}

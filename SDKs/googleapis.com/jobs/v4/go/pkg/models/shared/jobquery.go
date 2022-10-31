package shared




type JobQueryEmploymentTypesEnum string

const (
    JobQueryEmploymentTypesEnumEmploymentTypeUnspecified JobQueryEmploymentTypesEnum = "EMPLOYMENT_TYPE_UNSPECIFIED"
JobQueryEmploymentTypesEnumFullTime JobQueryEmploymentTypesEnum = "FULL_TIME"
JobQueryEmploymentTypesEnumPartTime JobQueryEmploymentTypesEnum = "PART_TIME"
JobQueryEmploymentTypesEnumContractor JobQueryEmploymentTypesEnum = "CONTRACTOR"
JobQueryEmploymentTypesEnumContractToHire JobQueryEmploymentTypesEnum = "CONTRACT_TO_HIRE"
JobQueryEmploymentTypesEnumTemporary JobQueryEmploymentTypesEnum = "TEMPORARY"
JobQueryEmploymentTypesEnumIntern JobQueryEmploymentTypesEnum = "INTERN"
JobQueryEmploymentTypesEnumVolunteer JobQueryEmploymentTypesEnum = "VOLUNTEER"
JobQueryEmploymentTypesEnumPerDiem JobQueryEmploymentTypesEnum = "PER_DIEM"
JobQueryEmploymentTypesEnumFlyInFlyOut JobQueryEmploymentTypesEnum = "FLY_IN_FLY_OUT"
JobQueryEmploymentTypesEnumOtherEmploymentType JobQueryEmploymentTypesEnum = "OTHER_EMPLOYMENT_TYPE"
)



type JobQueryJobCategoriesEnum string

const (
    JobQueryJobCategoriesEnumJobCategoryUnspecified JobQueryJobCategoriesEnum = "JOB_CATEGORY_UNSPECIFIED"
JobQueryJobCategoriesEnumAccountingAndFinance JobQueryJobCategoriesEnum = "ACCOUNTING_AND_FINANCE"
JobQueryJobCategoriesEnumAdministrativeAndOffice JobQueryJobCategoriesEnum = "ADMINISTRATIVE_AND_OFFICE"
JobQueryJobCategoriesEnumAdvertisingAndMarketing JobQueryJobCategoriesEnum = "ADVERTISING_AND_MARKETING"
JobQueryJobCategoriesEnumAnimalCare JobQueryJobCategoriesEnum = "ANIMAL_CARE"
JobQueryJobCategoriesEnumArtFashionAndDesign JobQueryJobCategoriesEnum = "ART_FASHION_AND_DESIGN"
JobQueryJobCategoriesEnumBusinessOperations JobQueryJobCategoriesEnum = "BUSINESS_OPERATIONS"
JobQueryJobCategoriesEnumCleaningAndFacilities JobQueryJobCategoriesEnum = "CLEANING_AND_FACILITIES"
JobQueryJobCategoriesEnumComputerAndIt JobQueryJobCategoriesEnum = "COMPUTER_AND_IT"
JobQueryJobCategoriesEnumConstruction JobQueryJobCategoriesEnum = "CONSTRUCTION"
JobQueryJobCategoriesEnumCustomerService JobQueryJobCategoriesEnum = "CUSTOMER_SERVICE"
JobQueryJobCategoriesEnumEducation JobQueryJobCategoriesEnum = "EDUCATION"
JobQueryJobCategoriesEnumEntertainmentAndTravel JobQueryJobCategoriesEnum = "ENTERTAINMENT_AND_TRAVEL"
JobQueryJobCategoriesEnumFarmingAndOutdoors JobQueryJobCategoriesEnum = "FARMING_AND_OUTDOORS"
JobQueryJobCategoriesEnumHealthcare JobQueryJobCategoriesEnum = "HEALTHCARE"
JobQueryJobCategoriesEnumHumanResources JobQueryJobCategoriesEnum = "HUMAN_RESOURCES"
JobQueryJobCategoriesEnumInstallationMaintenanceAndRepair JobQueryJobCategoriesEnum = "INSTALLATION_MAINTENANCE_AND_REPAIR"
JobQueryJobCategoriesEnumLegal JobQueryJobCategoriesEnum = "LEGAL"
JobQueryJobCategoriesEnumManagement JobQueryJobCategoriesEnum = "MANAGEMENT"
JobQueryJobCategoriesEnumManufacturingAndWarehouse JobQueryJobCategoriesEnum = "MANUFACTURING_AND_WAREHOUSE"
JobQueryJobCategoriesEnumMediaCommunicationsAndWriting JobQueryJobCategoriesEnum = "MEDIA_COMMUNICATIONS_AND_WRITING"
JobQueryJobCategoriesEnumOilGasAndMining JobQueryJobCategoriesEnum = "OIL_GAS_AND_MINING"
JobQueryJobCategoriesEnumPersonalCareAndServices JobQueryJobCategoriesEnum = "PERSONAL_CARE_AND_SERVICES"
JobQueryJobCategoriesEnumProtectiveServices JobQueryJobCategoriesEnum = "PROTECTIVE_SERVICES"
JobQueryJobCategoriesEnumRealEstate JobQueryJobCategoriesEnum = "REAL_ESTATE"
JobQueryJobCategoriesEnumRestaurantAndHospitality JobQueryJobCategoriesEnum = "RESTAURANT_AND_HOSPITALITY"
JobQueryJobCategoriesEnumSalesAndRetail JobQueryJobCategoriesEnum = "SALES_AND_RETAIL"
JobQueryJobCategoriesEnumScienceAndEngineering JobQueryJobCategoriesEnum = "SCIENCE_AND_ENGINEERING"
JobQueryJobCategoriesEnumSocialServicesAndNonProfit JobQueryJobCategoriesEnum = "SOCIAL_SERVICES_AND_NON_PROFIT"
JobQueryJobCategoriesEnumSportsFitnessAndRecreation JobQueryJobCategoriesEnum = "SPORTS_FITNESS_AND_RECREATION"
JobQueryJobCategoriesEnumTransportationAndLogistics JobQueryJobCategoriesEnum = "TRANSPORTATION_AND_LOGISTICS"
)


type JobQuery struct {
    CommuteFilter *CommuteFilter `json:"commuteFilter,omitempty"`
    Companies []string `json:"companies,omitempty"`
    CompanyDisplayNames []string `json:"companyDisplayNames,omitempty"`
    CompensationFilter *CompensationFilter `json:"compensationFilter,omitempty"`
    CustomAttributeFilter *string `json:"customAttributeFilter,omitempty"`
    DisableSpellCheck *bool `json:"disableSpellCheck,omitempty"`
    EmploymentTypes []JobQueryEmploymentTypesEnum `json:"employmentTypes,omitempty"`
    ExcludedJobs []string `json:"excludedJobs,omitempty"`
    JobCategories []JobQueryJobCategoriesEnum `json:"jobCategories,omitempty"`
    LanguageCodes []string `json:"languageCodes,omitempty"`
    LocationFilters []LocationFilter `json:"locationFilters,omitempty"`
    PublishTimeRange *TimestampRange `json:"publishTimeRange,omitempty"`
    Query *string `json:"query,omitempty"`
    QueryLanguageCode *string `json:"queryLanguageCode,omitempty"`
    
}


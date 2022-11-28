package shared

type JobDerivedInfoJobCategoriesEnum string

const (
	JobDerivedInfoJobCategoriesEnumJobCategoryUnspecified           JobDerivedInfoJobCategoriesEnum = "JOB_CATEGORY_UNSPECIFIED"
	JobDerivedInfoJobCategoriesEnumAccountingAndFinance             JobDerivedInfoJobCategoriesEnum = "ACCOUNTING_AND_FINANCE"
	JobDerivedInfoJobCategoriesEnumAdministrativeAndOffice          JobDerivedInfoJobCategoriesEnum = "ADMINISTRATIVE_AND_OFFICE"
	JobDerivedInfoJobCategoriesEnumAdvertisingAndMarketing          JobDerivedInfoJobCategoriesEnum = "ADVERTISING_AND_MARKETING"
	JobDerivedInfoJobCategoriesEnumAnimalCare                       JobDerivedInfoJobCategoriesEnum = "ANIMAL_CARE"
	JobDerivedInfoJobCategoriesEnumArtFashionAndDesign              JobDerivedInfoJobCategoriesEnum = "ART_FASHION_AND_DESIGN"
	JobDerivedInfoJobCategoriesEnumBusinessOperations               JobDerivedInfoJobCategoriesEnum = "BUSINESS_OPERATIONS"
	JobDerivedInfoJobCategoriesEnumCleaningAndFacilities            JobDerivedInfoJobCategoriesEnum = "CLEANING_AND_FACILITIES"
	JobDerivedInfoJobCategoriesEnumComputerAndIt                    JobDerivedInfoJobCategoriesEnum = "COMPUTER_AND_IT"
	JobDerivedInfoJobCategoriesEnumConstruction                     JobDerivedInfoJobCategoriesEnum = "CONSTRUCTION"
	JobDerivedInfoJobCategoriesEnumCustomerService                  JobDerivedInfoJobCategoriesEnum = "CUSTOMER_SERVICE"
	JobDerivedInfoJobCategoriesEnumEducation                        JobDerivedInfoJobCategoriesEnum = "EDUCATION"
	JobDerivedInfoJobCategoriesEnumEntertainmentAndTravel           JobDerivedInfoJobCategoriesEnum = "ENTERTAINMENT_AND_TRAVEL"
	JobDerivedInfoJobCategoriesEnumFarmingAndOutdoors               JobDerivedInfoJobCategoriesEnum = "FARMING_AND_OUTDOORS"
	JobDerivedInfoJobCategoriesEnumHealthcare                       JobDerivedInfoJobCategoriesEnum = "HEALTHCARE"
	JobDerivedInfoJobCategoriesEnumHumanResources                   JobDerivedInfoJobCategoriesEnum = "HUMAN_RESOURCES"
	JobDerivedInfoJobCategoriesEnumInstallationMaintenanceAndRepair JobDerivedInfoJobCategoriesEnum = "INSTALLATION_MAINTENANCE_AND_REPAIR"
	JobDerivedInfoJobCategoriesEnumLegal                            JobDerivedInfoJobCategoriesEnum = "LEGAL"
	JobDerivedInfoJobCategoriesEnumManagement                       JobDerivedInfoJobCategoriesEnum = "MANAGEMENT"
	JobDerivedInfoJobCategoriesEnumManufacturingAndWarehouse        JobDerivedInfoJobCategoriesEnum = "MANUFACTURING_AND_WAREHOUSE"
	JobDerivedInfoJobCategoriesEnumMediaCommunicationsAndWriting    JobDerivedInfoJobCategoriesEnum = "MEDIA_COMMUNICATIONS_AND_WRITING"
	JobDerivedInfoJobCategoriesEnumOilGasAndMining                  JobDerivedInfoJobCategoriesEnum = "OIL_GAS_AND_MINING"
	JobDerivedInfoJobCategoriesEnumPersonalCareAndServices          JobDerivedInfoJobCategoriesEnum = "PERSONAL_CARE_AND_SERVICES"
	JobDerivedInfoJobCategoriesEnumProtectiveServices               JobDerivedInfoJobCategoriesEnum = "PROTECTIVE_SERVICES"
	JobDerivedInfoJobCategoriesEnumRealEstate                       JobDerivedInfoJobCategoriesEnum = "REAL_ESTATE"
	JobDerivedInfoJobCategoriesEnumRestaurantAndHospitality         JobDerivedInfoJobCategoriesEnum = "RESTAURANT_AND_HOSPITALITY"
	JobDerivedInfoJobCategoriesEnumSalesAndRetail                   JobDerivedInfoJobCategoriesEnum = "SALES_AND_RETAIL"
	JobDerivedInfoJobCategoriesEnumScienceAndEngineering            JobDerivedInfoJobCategoriesEnum = "SCIENCE_AND_ENGINEERING"
	JobDerivedInfoJobCategoriesEnumSocialServicesAndNonProfit       JobDerivedInfoJobCategoriesEnum = "SOCIAL_SERVICES_AND_NON_PROFIT"
	JobDerivedInfoJobCategoriesEnumSportsFitnessAndRecreation       JobDerivedInfoJobCategoriesEnum = "SPORTS_FITNESS_AND_RECREATION"
	JobDerivedInfoJobCategoriesEnumTransportationAndLogistics       JobDerivedInfoJobCategoriesEnum = "TRANSPORTATION_AND_LOGISTICS"
)

// JobDerivedInfo
// Derived details about the job posting.
type JobDerivedInfo struct {
	JobCategories []JobDerivedInfoJobCategoriesEnum `json:"jobCategories,omitempty"`
	Locations     []Location                        `json:"locations,omitempty"`
}

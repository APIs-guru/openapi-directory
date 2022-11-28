import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HistogramResultSearchTypeEnum {
    SearchTypeUnspecified = "SEARCH_TYPE_UNSPECIFIED",
    CompanyId = "COMPANY_ID",
    EmploymentType = "EMPLOYMENT_TYPE",
    CompanySize = "COMPANY_SIZE",
    DatePublished = "DATE_PUBLISHED",
    EducationLevel = "EDUCATION_LEVEL",
    ExperienceLevel = "EXPERIENCE_LEVEL",
    Admin1 = "ADMIN_1",
    Country = "COUNTRY",
    City = "CITY",
    Locale = "LOCALE",
    Language = "LANGUAGE",
    Category = "CATEGORY",
    CityCoordinate = "CITY_COORDINATE",
    Admin1Country = "ADMIN_1_COUNTRY",
    CompanyDisplayName = "COMPANY_DISPLAY_NAME",
    BaseCompensationUnit = "BASE_COMPENSATION_UNIT"
}
/**
 * Output only. Result of a histogram call. The response contains the histogram map for the search type specified by HistogramResult.field. The response is a map of each filter value to the corresponding count of jobs for that filter.
**/
export declare class HistogramResult extends SpeakeasyBase {
    searchType?: HistogramResultSearchTypeEnum;
    values?: Map<string, number>;
}

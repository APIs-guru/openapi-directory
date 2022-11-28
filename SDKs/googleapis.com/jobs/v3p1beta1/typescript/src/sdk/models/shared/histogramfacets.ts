import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompensationHistogramRequest } from "./compensationhistogramrequest";
import { CustomAttributeHistogramRequest } from "./customattributehistogramrequest";


export enum HistogramFacetsSimpleHistogramFacetsEnum {
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


// HistogramFacets
/** 
 * Input only. Histogram facets to be specified in SearchJobsRequest.
**/
export class HistogramFacets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compensationHistogramFacets", elemType: CompensationHistogramRequest })
  compensationHistogramFacets?: CompensationHistogramRequest[];

  @SpeakeasyMetadata({ data: "json, name=customAttributeHistogramFacets", elemType: CustomAttributeHistogramRequest })
  customAttributeHistogramFacets?: CustomAttributeHistogramRequest[];

  @SpeakeasyMetadata({ data: "json, name=simpleHistogramFacets" })
  simpleHistogramFacets?: HistogramFacetsSimpleHistogramFacetsEnum[];
}

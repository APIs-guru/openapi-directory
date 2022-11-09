import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompensationHistogramRequest } from "./compensationhistogramrequest";
import { CustomAttributeHistogramRequest } from "./customattributehistogramrequest";

export enum HistogramFacetsSimpleHistogramFacetsEnum {
    SearchTypeUnspecified = "SEARCH_TYPE_UNSPECIFIED"
,    CompanyId = "COMPANY_ID"
,    EmploymentType = "EMPLOYMENT_TYPE"
,    CompanySize = "COMPANY_SIZE"
,    DatePublished = "DATE_PUBLISHED"
,    EducationLevel = "EDUCATION_LEVEL"
,    ExperienceLevel = "EXPERIENCE_LEVEL"
,    Admin1 = "ADMIN_1"
,    Country = "COUNTRY"
,    City = "CITY"
,    Locale = "LOCALE"
,    Language = "LANGUAGE"
,    Category = "CATEGORY"
,    CityCoordinate = "CITY_COORDINATE"
,    Admin1Country = "ADMIN_1_COUNTRY"
,    CompanyDisplayName = "COMPANY_DISPLAY_NAME"
,    BaseCompensationUnit = "BASE_COMPENSATION_UNIT"
}


// HistogramFacets
/** 
 * Input only. Histogram facets to be specified in SearchJobsRequest.
**/
export class HistogramFacets extends SpeakeasyBase {
  @Metadata({ data: "json, name=compensationHistogramFacets", elemType: shared.CompensationHistogramRequest })
  compensationHistogramFacets?: CompensationHistogramRequest[];

  @Metadata({ data: "json, name=customAttributeHistogramFacets", elemType: shared.CustomAttributeHistogramRequest })
  customAttributeHistogramFacets?: CustomAttributeHistogramRequest[];

  @Metadata({ data: "json, name=simpleHistogramFacets" })
  simpleHistogramFacets?: HistogramFacetsSimpleHistogramFacetsEnum[];
}

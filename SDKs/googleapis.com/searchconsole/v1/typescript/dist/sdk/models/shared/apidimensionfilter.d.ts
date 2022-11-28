import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiDimensionFilterDimensionEnum {
    Query = "QUERY",
    Page = "PAGE",
    Country = "COUNTRY",
    Device = "DEVICE",
    SearchAppearance = "SEARCH_APPEARANCE"
}
export declare enum ApiDimensionFilterOperatorEnum {
    Equals = "EQUALS",
    NotEquals = "NOT_EQUALS",
    Contains = "CONTAINS",
    NotContains = "NOT_CONTAINS",
    IncludingRegex = "INCLUDING_REGEX",
    ExcludingRegex = "EXCLUDING_REGEX"
}
/**
 * A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.
**/
export declare class ApiDimensionFilter extends SpeakeasyBase {
    dimension?: ApiDimensionFilterDimensionEnum;
    expression?: string;
    operator?: ApiDimensionFilterOperatorEnum;
}

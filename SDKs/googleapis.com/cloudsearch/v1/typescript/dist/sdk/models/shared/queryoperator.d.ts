import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryOperatorTypeEnum {
    Unknown = "UNKNOWN",
    Integer = "INTEGER",
    Double = "DOUBLE",
    Timestamp = "TIMESTAMP",
    Boolean = "BOOLEAN",
    Enum = "ENUM",
    Date = "DATE",
    Text = "TEXT",
    Html = "HTML"
}
/**
 * The definition of a operator that can be used in a Search/Suggest request.
**/
export declare class QueryOperator extends SpeakeasyBase {
    displayName?: string;
    enumValues?: string[];
    greaterThanOperatorName?: string;
    isFacetable?: boolean;
    isRepeatable?: boolean;
    isReturnable?: boolean;
    isSortable?: boolean;
    isSuggestable?: boolean;
    lessThanOperatorName?: string;
    objectType?: string;
    operatorName?: string;
    type?: QueryOperatorTypeEnum;
}

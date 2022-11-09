import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryOperatorTypeEnum {
    Unknown = "UNKNOWN"
,    Integer = "INTEGER"
,    Double = "DOUBLE"
,    Timestamp = "TIMESTAMP"
,    Boolean = "BOOLEAN"
,    Enum = "ENUM"
,    Date = "DATE"
,    Text = "TEXT"
,    Html = "HTML"
}


// QueryOperator
/** 
 * The definition of a operator that can be used in a Search/Suggest request.
**/
export class QueryOperator extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enumValues" })
  enumValues?: string[];

  @Metadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @Metadata({ data: "json, name=isFacetable" })
  isFacetable?: boolean;

  @Metadata({ data: "json, name=isRepeatable" })
  isRepeatable?: boolean;

  @Metadata({ data: "json, name=isReturnable" })
  isReturnable?: boolean;

  @Metadata({ data: "json, name=isSortable" })
  isSortable?: boolean;

  @Metadata({ data: "json, name=isSuggestable" })
  isSuggestable?: boolean;

  @Metadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=type" })
  type?: QueryOperatorTypeEnum;
}

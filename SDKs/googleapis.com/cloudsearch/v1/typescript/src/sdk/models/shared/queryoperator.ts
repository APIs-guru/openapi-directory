import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryOperatorTypeEnum {
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


// QueryOperator
/** 
 * The definition of a operator that can be used in a Search/Suggest request.
**/
export class QueryOperator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enumValues" })
  enumValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=isFacetable" })
  isFacetable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRepeatable" })
  isRepeatable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isReturnable" })
  isReturnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSortable" })
  isSortable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSuggestable" })
  isSuggestable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: QueryOperatorTypeEnum;
}

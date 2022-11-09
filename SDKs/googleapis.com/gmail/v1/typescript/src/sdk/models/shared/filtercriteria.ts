import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FilterCriteriaSizeComparisonEnum {
    Unspecified = "unspecified"
,    Smaller = "smaller"
,    Larger = "larger"
}


// FilterCriteria
/** 
 * Message matching criteria.
**/
export class FilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeChats" })
  excludeChats?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=hasAttachment" })
  hasAttachment?: boolean;

  @Metadata({ data: "json, name=negatedQuery" })
  negatedQuery?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=sizeComparison" })
  sizeComparison?: FilterCriteriaSizeComparisonEnum;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}

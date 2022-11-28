import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FilterCriteriaSizeComparisonEnum {
    Unspecified = "unspecified",
    Smaller = "smaller",
    Larger = "larger"
}


// FilterCriteria
/** 
 * Message matching criteria.
**/
export class FilterCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeChats" })
  excludeChats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=hasAttachment" })
  hasAttachment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=negatedQuery" })
  negatedQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeComparison" })
  sizeComparison?: FilterCriteriaSizeComparisonEnum;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}

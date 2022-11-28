import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionStatusItemLevelIssue
/** 
 * Issue associated with the collection.
**/
export class CollectionStatusItemLevelIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableCountries" })
  applicableCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=servability" })
  servability?: string;
}

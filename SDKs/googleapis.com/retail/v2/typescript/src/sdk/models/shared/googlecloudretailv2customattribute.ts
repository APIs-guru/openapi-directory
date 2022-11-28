import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2CustomAttribute
/** 
 * A custom attribute that is not explicitly modeled in Product.
**/
export class GoogleCloudRetailV2CustomAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexable" })
  indexable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numbers" })
  numbers?: number[];

  @SpeakeasyMetadata({ data: "json, name=searchable" })
  searchable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}

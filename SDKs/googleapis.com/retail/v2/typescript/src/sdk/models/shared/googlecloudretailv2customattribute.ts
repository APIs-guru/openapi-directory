import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2CustomAttribute
/** 
 * A custom attribute that is not explicitly modeled in Product.
**/
export class GoogleCloudRetailV2CustomAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexable" })
  indexable?: boolean;

  @Metadata({ data: "json, name=numbers" })
  numbers?: number[];

  @Metadata({ data: "json, name=searchable" })
  searchable?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string[];
}

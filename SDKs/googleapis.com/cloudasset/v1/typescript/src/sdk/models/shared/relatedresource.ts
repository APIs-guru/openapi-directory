import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelatedResource
/** 
 * The detailed related resource.
**/
export class RelatedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: string;

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}

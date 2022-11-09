import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelatedResource
/** 
 * The detailed related resource.
**/
export class RelatedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetType" })
  assetType?: string;

  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}

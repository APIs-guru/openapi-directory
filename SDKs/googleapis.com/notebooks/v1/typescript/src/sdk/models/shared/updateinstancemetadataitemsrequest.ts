import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateInstanceMetadataItemsRequest
/** 
 * Request for adding/changing metadata items for an instance.
**/
export class UpdateInstanceMetadataItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items" })
  items?: Map<string, string>;
}

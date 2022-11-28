import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateInstanceMetadataItemsRequest
/** 
 * Request for adding/changing metadata items for an instance.
**/
export class UpdateInstanceMetadataItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: Map<string, string>;
}

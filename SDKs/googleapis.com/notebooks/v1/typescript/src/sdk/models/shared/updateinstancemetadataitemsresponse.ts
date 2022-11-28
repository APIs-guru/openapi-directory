import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateInstanceMetadataItemsResponse
/** 
 * Response for adding/changing metadata items for an instance.
**/
export class UpdateInstanceMetadataItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: Map<string, string>;
}

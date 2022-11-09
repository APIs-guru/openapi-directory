import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateInstanceMetadataItemsResponse
/** 
 * Response for adding/changing metadata items for an instance.
**/
export class UpdateInstanceMetadataItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items" })
  items?: Map<string, string>;
}

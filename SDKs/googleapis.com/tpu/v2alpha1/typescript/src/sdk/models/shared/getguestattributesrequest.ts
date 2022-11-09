import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetGuestAttributesRequest
/** 
 * Request for GetGuestAttributes.
**/
export class GetGuestAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryPath" })
  queryPath?: string;

  @Metadata({ data: "json, name=workerIds" })
  workerIds?: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetGuestAttributesRequest
/** 
 * Request for GetGuestAttributes.
**/
export class GetGuestAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryPath" })
  queryPath?: string;

  @SpeakeasyMetadata({ data: "json, name=workerIds" })
  workerIds?: string[];
}

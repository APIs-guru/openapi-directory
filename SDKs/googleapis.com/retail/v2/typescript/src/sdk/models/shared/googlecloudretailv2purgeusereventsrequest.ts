import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2PurgeUserEventsRequest
/** 
 * Request message for PurgeUserEvents method.
**/
export class GoogleCloudRetailV2PurgeUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaPurgeUserEventsRequest
/** 
 * Request message for PurgeUserEvents method.
**/
export class GoogleCloudRetailV2betaPurgeUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}

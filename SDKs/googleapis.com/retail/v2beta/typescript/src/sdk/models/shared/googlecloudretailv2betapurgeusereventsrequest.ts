import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaPurgeUserEventsRequest
/** 
 * Request message for PurgeUserEvents method.
**/
export class GoogleCloudRetailV2betaPurgeUserEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;
}

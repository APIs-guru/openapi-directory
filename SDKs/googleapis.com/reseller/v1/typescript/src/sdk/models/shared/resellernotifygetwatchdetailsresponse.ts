import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResellernotifyGetwatchdetailsResponse
/** 
 * JSON template for resellernotify getwatchdetails response.
**/
export class ResellernotifyGetwatchdetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmailAddresses" })
  serviceAccountEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResellernotifyGetwatchdetailsResponse
/** 
 * JSON template for resellernotify getwatchdetails response.
**/
export class ResellernotifyGetwatchdetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccountEmailAddresses" })
  serviceAccountEmailAddresses?: string[];

  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectBillingInfo } from "./projectbillinginfo";



// ListProjectBillingInfoResponse
/** 
 * Request message for `ListProjectBillingInfoResponse`.
**/
export class ListProjectBillingInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projectBillingInfo", elemType: ProjectBillingInfo })
  projectBillingInfo?: ProjectBillingInfo[];
}

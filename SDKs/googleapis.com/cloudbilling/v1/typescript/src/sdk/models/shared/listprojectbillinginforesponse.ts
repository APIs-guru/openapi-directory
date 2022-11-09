import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectBillingInfo } from "./projectbillinginfo";


// ListProjectBillingInfoResponse
/** 
 * Request message for `ListProjectBillingInfoResponse`.
**/
export class ListProjectBillingInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=projectBillingInfo", elemType: shared.ProjectBillingInfo })
  projectBillingInfo?: ProjectBillingInfo[];
}

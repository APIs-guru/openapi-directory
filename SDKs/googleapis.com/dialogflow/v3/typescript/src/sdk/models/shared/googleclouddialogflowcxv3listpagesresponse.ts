import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";


// GoogleCloudDialogflowCxV3ListPagesResponse
/** 
 * The response message for Pages.ListPages.
**/
export class GoogleCloudDialogflowCxV3ListPagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pages", elemType: shared.GoogleCloudDialogflowCxV3Page })
  pages?: GoogleCloudDialogflowCxV3Page[];
}

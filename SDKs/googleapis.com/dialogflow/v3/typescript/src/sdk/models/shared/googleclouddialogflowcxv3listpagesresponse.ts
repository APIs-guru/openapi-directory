import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";



// GoogleCloudDialogflowCxV3ListPagesResponse
/** 
 * The response message for Pages.ListPages.
**/
export class GoogleCloudDialogflowCxV3ListPagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDialogflowCxV3Page })
  pages?: GoogleCloudDialogflowCxV3Page[];
}

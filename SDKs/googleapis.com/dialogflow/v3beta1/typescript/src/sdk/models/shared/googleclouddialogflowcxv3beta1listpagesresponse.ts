import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";



// GoogleCloudDialogflowCxV3beta1ListPagesResponse
/** 
 * The response message for Pages.ListPages.
**/
export class GoogleCloudDialogflowCxV3beta1ListPagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: GoogleCloudDialogflowCxV3beta1Page })
  pages?: GoogleCloudDialogflowCxV3beta1Page[];
}

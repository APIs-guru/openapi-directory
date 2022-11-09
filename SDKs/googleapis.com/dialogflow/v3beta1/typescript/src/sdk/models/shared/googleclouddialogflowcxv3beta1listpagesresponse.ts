import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";


// GoogleCloudDialogflowCxV3beta1ListPagesResponse
/** 
 * The response message for Pages.ListPages.
**/
export class GoogleCloudDialogflowCxV3beta1ListPagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pages", elemType: shared.GoogleCloudDialogflowCxV3beta1Page })
  pages?: GoogleCloudDialogflowCxV3beta1Page[];
}

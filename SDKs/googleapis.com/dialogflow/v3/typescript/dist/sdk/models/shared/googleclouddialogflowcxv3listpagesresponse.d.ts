import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
/**
 * The response message for Pages.ListPages.
**/
export declare class GoogleCloudDialogflowCxV3ListPagesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pages?: GoogleCloudDialogflowCxV3Page[];
}

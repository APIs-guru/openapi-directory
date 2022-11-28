import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
/**
 * The response message for Pages.ListPages.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListPagesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pages?: GoogleCloudDialogflowCxV3beta1Page[];
}

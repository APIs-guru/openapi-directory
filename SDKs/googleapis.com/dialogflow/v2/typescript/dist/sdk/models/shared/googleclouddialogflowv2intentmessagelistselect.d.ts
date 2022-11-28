import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageListSelectItem } from "./googleclouddialogflowv2intentmessagelistselectitem";
/**
 * The card for presenting a list of options to select from.
**/
export declare class GoogleCloudDialogflowV2IntentMessageListSelect extends SpeakeasyBase {
    items?: GoogleCloudDialogflowV2IntentMessageListSelectItem[];
    subtitle?: string;
    title?: string;
}

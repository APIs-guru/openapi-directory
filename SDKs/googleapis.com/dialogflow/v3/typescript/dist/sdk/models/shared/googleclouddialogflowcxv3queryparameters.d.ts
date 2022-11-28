import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowCxV3SessionEntityType } from "./googleclouddialogflowcxv3sessionentitytype";
/**
 * Represents the parameters of a conversational query.
**/
export declare class GoogleCloudDialogflowCxV3QueryParameters extends SpeakeasyBase {
    analyzeQueryTextSentiment?: boolean;
    currentPage?: string;
    disableWebhook?: boolean;
    flowVersions?: string[];
    geoLocation?: GoogleTypeLatLng;
    parameters?: Map<string, any>;
    payload?: Map<string, any>;
    sessionEntityTypes?: GoogleCloudDialogflowCxV3SessionEntityType[];
    timeZone?: string;
    webhookHeaders?: Map<string, string>;
}

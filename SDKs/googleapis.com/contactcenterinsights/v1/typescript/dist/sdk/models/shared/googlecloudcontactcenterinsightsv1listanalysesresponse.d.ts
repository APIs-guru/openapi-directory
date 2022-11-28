import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";
/**
 * The response to list analyses.
**/
export declare class GoogleCloudContactcenterinsightsV1ListAnalysesResponse extends SpeakeasyBase {
    analyses?: GoogleCloudContactcenterinsightsV1Analysis[];
    nextPageToken?: string;
}

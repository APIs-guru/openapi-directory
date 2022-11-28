import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Dataset } from "./googleclouddatalabelingv1beta1dataset";
/**
 * Results of listing datasets within a project.
**/
export declare class GoogleCloudDatalabelingV1beta1ListDatasetsResponse extends SpeakeasyBase {
    datasets?: GoogleCloudDatalabelingV1beta1Dataset[];
    nextPageToken?: string;
}

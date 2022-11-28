import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotatedDataset } from "./googleclouddatalabelingv1beta1annotateddataset";
/**
 * Results of listing annotated datasets for a dataset.
**/
export declare class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse extends SpeakeasyBase {
    annotatedDatasets?: GoogleCloudDatalabelingV1beta1AnnotatedDataset[];
    nextPageToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotatedDataset } from "./googleclouddatalabelingv1beta1annotateddataset";



// GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
/** 
 * Results of listing annotated datasets for a dataset.
**/
export class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotatedDatasets", elemType: GoogleCloudDatalabelingV1beta1AnnotatedDataset })
  annotatedDatasets?: GoogleCloudDatalabelingV1beta1AnnotatedDataset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

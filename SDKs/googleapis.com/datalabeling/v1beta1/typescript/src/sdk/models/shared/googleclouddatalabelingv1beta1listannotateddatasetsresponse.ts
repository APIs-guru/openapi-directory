import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1AnnotatedDataset } from "./googleclouddatalabelingv1beta1annotateddataset";


// GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse
/** 
 * Results of listing annotated datasets for a dataset.
**/
export class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotatedDatasets", elemType: shared.GoogleCloudDatalabelingV1beta1AnnotatedDataset })
  annotatedDatasets?: GoogleCloudDatalabelingV1beta1AnnotatedDataset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

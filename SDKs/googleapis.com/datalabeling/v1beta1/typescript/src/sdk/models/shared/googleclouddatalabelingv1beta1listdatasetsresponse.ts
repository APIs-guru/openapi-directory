import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Dataset } from "./googleclouddatalabelingv1beta1dataset";



// GoogleCloudDatalabelingV1beta1ListDatasetsResponse
/** 
 * Results of listing datasets within a project.
**/
export class GoogleCloudDatalabelingV1beta1ListDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasets", elemType: GoogleCloudDatalabelingV1beta1Dataset })
  datasets?: GoogleCloudDatalabelingV1beta1Dataset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Dataset } from "./googleclouddatalabelingv1beta1dataset";


// GoogleCloudDatalabelingV1beta1ListDatasetsResponse
/** 
 * Results of listing datasets within a project.
**/
export class GoogleCloudDatalabelingV1beta1ListDatasetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasets", elemType: shared.GoogleCloudDatalabelingV1beta1Dataset })
  datasets?: GoogleCloudDatalabelingV1beta1Dataset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

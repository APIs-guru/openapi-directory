import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1BigQueryDestination } from "./googlecloudassetv1bigquerydestination";
import { GoogleCloudAssetV1GcsDestination } from "./googlecloudassetv1gcsdestination";



// IamPolicyAnalysisOutputConfig
/** 
 * Output configuration for export IAM policy analysis destination.
**/
export class IamPolicyAnalysisOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudAssetV1BigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudAssetV1GcsDestination;
}

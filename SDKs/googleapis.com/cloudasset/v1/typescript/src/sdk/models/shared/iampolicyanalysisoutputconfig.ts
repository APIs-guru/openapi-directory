import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssetV1BigQueryDestination } from "./googlecloudassetv1bigquerydestination";
import { GoogleCloudAssetV1GcsDestination } from "./googlecloudassetv1gcsdestination";


// IamPolicyAnalysisOutputConfig
/** 
 * Output configuration for export IAM policy analysis destination.
**/
export class IamPolicyAnalysisOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudAssetV1BigQueryDestination;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudAssetV1GcsDestination;
}

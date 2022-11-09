import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1OutputConfig } from "./googleclouddatalabelingv1beta1outputconfig";


// GoogleCloudDatalabelingV1beta1ExportDataRequest
/** 
 * Request message for ExportData API.
**/
export class GoogleCloudDatalabelingV1beta1ExportDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotatedDataset" })
  annotatedDataset?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;

  @Metadata({ data: "json, name=userEmailAddress" })
  userEmailAddress?: string;
}

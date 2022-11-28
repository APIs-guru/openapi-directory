import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1OutputConfig } from "./googleclouddatalabelingv1beta1outputconfig";



// GoogleCloudDatalabelingV1beta1ExportDataRequest
/** 
 * Request message for ExportData API.
**/
export class GoogleCloudDatalabelingV1beta1ExportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotatedDataset" })
  annotatedDataset?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=userEmailAddress" })
  userEmailAddress?: string;
}

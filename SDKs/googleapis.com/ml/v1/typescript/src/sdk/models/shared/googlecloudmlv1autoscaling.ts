import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1MetricSpec } from "./googlecloudmlv1metricspec";



// GoogleCloudMlV1AutoScaling
/** 
 * Options for automatically scaling a model.
**/
export class GoogleCloudMlV1AutoScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxNodes" })
  maxNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudMlV1MetricSpec })
  metrics?: GoogleCloudMlV1MetricSpec[];

  @SpeakeasyMetadata({ data: "json, name=minNodes" })
  minNodes?: number;
}

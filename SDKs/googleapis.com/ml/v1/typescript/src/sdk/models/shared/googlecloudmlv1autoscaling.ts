import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1MetricSpec } from "./googlecloudmlv1metricspec";


// GoogleCloudMlV1AutoScaling
/** 
 * Options for automatically scaling a model.
**/
export class GoogleCloudMlV1AutoScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxNodes" })
  maxNodes?: number;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudMlV1MetricSpec })
  metrics?: GoogleCloudMlV1MetricSpec[];

  @Metadata({ data: "json, name=minNodes" })
  minNodes?: number;
}

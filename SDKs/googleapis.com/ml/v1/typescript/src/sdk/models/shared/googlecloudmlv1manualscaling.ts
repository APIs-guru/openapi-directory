import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1ManualScaling
/** 
 * Options for manually scaling a model.
**/
export class GoogleCloudMlV1ManualScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodes" })
  nodes?: number;
}

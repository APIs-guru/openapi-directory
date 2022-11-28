import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1ManualScaling
/** 
 * Options for manually scaling a model.
**/
export class GoogleCloudMlV1ManualScaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodes" })
  nodes?: number;
}

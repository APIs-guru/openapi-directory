import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailureDetail
/** 
 * Details for an outcome with a FAILURE outcome summary.
**/
export class FailureDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crashed" })
  crashed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deviceOutOfMemory" })
  deviceOutOfMemory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=failedRoboscript" })
  failedRoboscript?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notInstalled" })
  notInstalled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otherNativeCrash" })
  otherNativeCrash?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timedOut" })
  timedOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unableToCrawl" })
  unableToCrawl?: boolean;
}

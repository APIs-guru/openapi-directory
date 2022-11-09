import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailureDetail
/** 
 * Details for an outcome with a FAILURE outcome summary.
**/
export class FailureDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=crashed" })
  crashed?: boolean;

  @Metadata({ data: "json, name=deviceOutOfMemory" })
  deviceOutOfMemory?: boolean;

  @Metadata({ data: "json, name=failedRoboscript" })
  failedRoboscript?: boolean;

  @Metadata({ data: "json, name=notInstalled" })
  notInstalled?: boolean;

  @Metadata({ data: "json, name=otherNativeCrash" })
  otherNativeCrash?: boolean;

  @Metadata({ data: "json, name=timedOut" })
  timedOut?: boolean;

  @Metadata({ data: "json, name=unableToCrawl" })
  unableToCrawl?: boolean;
}

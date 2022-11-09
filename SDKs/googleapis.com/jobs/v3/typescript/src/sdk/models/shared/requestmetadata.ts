import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceInfo } from "./deviceinfo";


// RequestMetadata
/** 
 * Input only. Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
**/
export class RequestMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceInfo" })
  deviceInfo?: DeviceInfo;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}

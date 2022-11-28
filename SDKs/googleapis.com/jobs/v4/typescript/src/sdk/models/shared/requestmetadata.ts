import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";



// RequestMetadata
/** 
 * Meta information related to the job searcher or entity conducting the job search. This information is used to improve the performance of the service.
**/
export class RequestMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissingIds" })
  allowMissingIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deviceInfo" })
  deviceInfo?: DeviceInfo;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}

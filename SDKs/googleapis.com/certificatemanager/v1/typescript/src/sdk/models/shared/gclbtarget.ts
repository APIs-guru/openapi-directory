import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpConfig } from "./ipconfig";



// GclbTarget
/** 
 * Describes a Target Proxy that uses this Certificate Map.
**/
export class GclbTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipConfigs", elemType: IpConfig })
  ipConfigs?: IpConfig[];

  @SpeakeasyMetadata({ data: "json, name=targetHttpsProxy" })
  targetHttpsProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=targetSslProxy" })
  targetSslProxy?: string;
}

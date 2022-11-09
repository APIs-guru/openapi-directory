import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpConfig } from "./ipconfig";


// GclbTarget
/** 
 * Describes a Target Proxy which uses this Certificate Map.
**/
export class GclbTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipConfigs", elemType: shared.IpConfig })
  ipConfigs?: IpConfig[];

  @Metadata({ data: "json, name=targetHttpsProxy" })
  targetHttpsProxy?: string;

  @Metadata({ data: "json, name=targetSslProxy" })
  targetSslProxy?: string;
}

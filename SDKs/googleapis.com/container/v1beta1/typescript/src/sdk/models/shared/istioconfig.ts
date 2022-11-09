import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IstioConfigAuthEnum {
    AuthNone = "AUTH_NONE"
,    AuthMutualTls = "AUTH_MUTUAL_TLS"
}


// IstioConfig
/** 
 * Configuration options for Istio addon.
**/
export class IstioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: IstioConfigAuthEnum;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;
}

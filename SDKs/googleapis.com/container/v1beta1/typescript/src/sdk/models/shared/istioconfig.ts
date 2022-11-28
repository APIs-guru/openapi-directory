import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IstioConfigAuthEnum {
    AuthNone = "AUTH_NONE",
    AuthMutualTls = "AUTH_MUTUAL_TLS"
}


// IstioConfig
/** 
 * Configuration options for Istio addon.
**/
export class IstioConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: IstioConfigAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;
}

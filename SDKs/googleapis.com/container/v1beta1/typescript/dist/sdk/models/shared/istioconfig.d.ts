import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IstioConfigAuthEnum {
    AuthNone = "AUTH_NONE",
    AuthMutualTls = "AUTH_MUTUAL_TLS"
}
/**
 * Configuration options for Istio addon.
**/
export declare class IstioConfig extends SpeakeasyBase {
    auth?: IstioConfigAuthEnum;
    disabled?: boolean;
}

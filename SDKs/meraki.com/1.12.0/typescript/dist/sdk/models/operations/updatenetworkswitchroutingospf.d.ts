import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchRoutingOspfPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum {
    Normal = "normal",
    Stub = "stub",
    Nssa = "nssa"
}
export declare class UpdateNetworkSwitchRoutingOspfRequestBodyAreas extends SpeakeasyBase {
    areaId: number;
    areaName: string;
    areaType: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
}
/**
 * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
**/
export declare class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey extends SpeakeasyBase {
    id?: number;
    passphrase?: string;
}
export declare class UpdateNetworkSwitchRoutingOspfRequestBody extends SpeakeasyBase {
    areas?: UpdateNetworkSwitchRoutingOspfRequestBodyAreas[];
    deadTimerInSeconds?: number;
    enabled?: boolean;
    helloTimerInSeconds?: number;
    md5AuthenticationEnabled?: boolean;
    md5AuthenticationKey?: UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
}
export declare class UpdateNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchRoutingOspfPathParams;
    request?: UpdateNetworkSwitchRoutingOspfRequestBody;
}
export declare class UpdateNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchRoutingOspf200ApplicationJsonObject?: Map<string, any>;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSnmpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkSnmpRequestBodyAccessEnum {
    None = "none",
    Community = "community",
    Users = "users"
}
export declare class UpdateNetworkSnmpRequestBodyUsers extends SpeakeasyBase {
    passphrase: string;
    username: string;
}
export declare class UpdateNetworkSnmpRequestBody extends SpeakeasyBase {
    access?: UpdateNetworkSnmpRequestBodyAccessEnum;
    communityString?: string;
    users?: UpdateNetworkSnmpRequestBodyUsers[];
}
export declare class UpdateNetworkSnmpRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSnmpPathParams;
    request?: UpdateNetworkSnmpRequestBody;
}
export declare class UpdateNetworkSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSnmp200ApplicationJsonObject?: Map<string, any>;
}

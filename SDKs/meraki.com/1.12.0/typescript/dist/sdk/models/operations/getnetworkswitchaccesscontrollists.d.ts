import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchAccessControlListsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchAccessControlListsPathParams;
}
export declare class GetNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchAccessControlLists200ApplicationJsonObject?: Map<string, any>;
}

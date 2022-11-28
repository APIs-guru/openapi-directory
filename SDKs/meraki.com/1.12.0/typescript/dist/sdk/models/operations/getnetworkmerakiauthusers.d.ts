import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkMerakiAuthUsersPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkMerakiAuthUsersRequest extends SpeakeasyBase {
    pathParams: GetNetworkMerakiAuthUsersPathParams;
}
export declare class GetNetworkMerakiAuthUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkMerakiAuthUsers200ApplicationJsonObject?: Map<string, any>;
}

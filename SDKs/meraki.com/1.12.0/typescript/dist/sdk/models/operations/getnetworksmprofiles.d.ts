import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmProfilesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmProfilesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmProfilesPathParams;
}
export declare class GetNetworkSmProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmProfiles200ApplicationJsonObject?: Map<string, any>;
}

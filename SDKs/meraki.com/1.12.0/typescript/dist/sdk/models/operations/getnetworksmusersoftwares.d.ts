import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmUserSoftwaresPathParams extends SpeakeasyBase {
    networkId: string;
    userId: string;
}
export declare class GetNetworkSmUserSoftwaresRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmUserSoftwaresPathParams;
}
export declare class GetNetworkSmUserSoftwaresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmUserSoftwares200ApplicationJsonObject?: Map<string, any>;
}

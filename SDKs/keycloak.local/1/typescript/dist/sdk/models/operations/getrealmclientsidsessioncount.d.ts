import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmClientsIdSessionCountPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdSessionCountRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdSessionCountPathParams;
}
export declare class GetRealmClientsIdSessionCountResponse extends SpeakeasyBase {
    contentType: string;
    getRealmClientsIdSessionCount2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}

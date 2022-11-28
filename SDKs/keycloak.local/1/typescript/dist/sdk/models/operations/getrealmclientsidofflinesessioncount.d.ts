import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmClientsIdOfflineSessionCountPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdOfflineSessionCountRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdOfflineSessionCountPathParams;
}
export declare class GetRealmClientsIdOfflineSessionCountResponse extends SpeakeasyBase {
    contentType: string;
    getRealmClientsIdOfflineSessionCount2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmUserStorageIdNamePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUserStorageIdNameRequest extends SpeakeasyBase {
    pathParams: GetRealmUserStorageIdNamePathParams;
}
export declare class GetRealmUserStorageIdNameResponse extends SpeakeasyBase {
    contentType: string;
    getRealmUserStorageIdName2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}

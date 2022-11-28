import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmCredentialRegistratorsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmCredentialRegistratorsRequest extends SpeakeasyBase {
    pathParams: GetRealmCredentialRegistratorsPathParams;
}
export declare class GetRealmCredentialRegistratorsResponse extends SpeakeasyBase {
    contentType: string;
    getRealmCredentialRegistrators2XxApplicationJsonStrings?: string[];
    statusCode: number;
}

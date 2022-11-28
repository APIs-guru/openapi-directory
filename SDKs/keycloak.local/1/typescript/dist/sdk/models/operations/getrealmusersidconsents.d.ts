import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmUsersIdConsentsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdConsentsRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdConsentsPathParams;
}
export declare class GetRealmUsersIdConsentsResponse extends SpeakeasyBase {
    contentType: string;
    getRealmUsersIdConsents2XxApplicationJsonObjects?: Map<string, any>[];
    statusCode: number;
}

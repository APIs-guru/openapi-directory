import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleContactGroupsDeletePathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class PeopleContactGroupsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    deleteContacts?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeopleContactGroupsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: PeopleContactGroupsDeletePathParams;
    queryParams: PeopleContactGroupsDeleteQueryParams;
    security: PeopleContactGroupsDeleteSecurity;
}
export declare class PeopleContactGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleContactGroupsMembersModifyPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class PeopleContactGroupsMembersModifyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeopleContactGroupsMembersModifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsMembersModifyRequest extends SpeakeasyBase {
    pathParams: PeopleContactGroupsMembersModifyPathParams;
    queryParams: PeopleContactGroupsMembersModifyQueryParams;
    request?: shared.ModifyContactGroupMembersRequest;
    security: PeopleContactGroupsMembersModifySecurity;
}
export declare class PeopleContactGroupsMembersModifyResponse extends SpeakeasyBase {
    contentType: string;
    modifyContactGroupMembersResponse?: shared.ModifyContactGroupMembersResponse;
    statusCode: number;
}

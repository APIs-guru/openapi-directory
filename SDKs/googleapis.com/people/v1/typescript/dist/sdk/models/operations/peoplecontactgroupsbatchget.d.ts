import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleContactGroupsBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupFields?: string;
    key?: string;
    maxMembers?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resourceNames?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeopleContactGroupsBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsBatchGetSecurity extends SpeakeasyBase {
    option1?: PeopleContactGroupsBatchGetSecurityOption1;
    option2?: PeopleContactGroupsBatchGetSecurityOption2;
}
export declare class PeopleContactGroupsBatchGetRequest extends SpeakeasyBase {
    queryParams: PeopleContactGroupsBatchGetQueryParams;
    security: PeopleContactGroupsBatchGetSecurity;
}
export declare class PeopleContactGroupsBatchGetResponse extends SpeakeasyBase {
    batchGetContactGroupsResponse?: shared.BatchGetContactGroupsResponse;
    contentType: string;
    statusCode: number;
}

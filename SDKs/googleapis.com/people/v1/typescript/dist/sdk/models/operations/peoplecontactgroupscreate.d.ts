import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleContactGroupsCreateQueryParams extends SpeakeasyBase {
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
export declare class PeopleContactGroupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsCreateRequest extends SpeakeasyBase {
    queryParams: PeopleContactGroupsCreateQueryParams;
    request?: shared.CreateContactGroupRequestInput;
    security: PeopleContactGroupsCreateSecurity;
}
export declare class PeopleContactGroupsCreateResponse extends SpeakeasyBase {
    contactGroup?: shared.ContactGroup;
    contentType: string;
    statusCode: number;
}

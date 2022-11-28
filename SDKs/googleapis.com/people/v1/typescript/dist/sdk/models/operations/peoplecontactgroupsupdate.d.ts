import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleContactGroupsUpdatePathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class PeopleContactGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class PeopleContactGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: PeopleContactGroupsUpdatePathParams;
    queryParams: PeopleContactGroupsUpdateQueryParams;
    request?: shared.UpdateContactGroupRequestInput;
    security: PeopleContactGroupsUpdateSecurity;
}
export declare class PeopleContactGroupsUpdateResponse extends SpeakeasyBase {
    contactGroup?: shared.ContactGroup;
    contentType: string;
    statusCode: number;
}

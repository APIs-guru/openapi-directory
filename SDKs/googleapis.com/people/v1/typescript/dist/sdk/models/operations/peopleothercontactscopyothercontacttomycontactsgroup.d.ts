import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams extends SpeakeasyBase {
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
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity extends SpeakeasyBase {
    option1?: PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1;
    option2?: PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2;
}
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest extends SpeakeasyBase {
    pathParams: PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams;
    queryParams: PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams;
    request?: shared.CopyOtherContactToMyContactsGroupRequest;
    security: PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity;
}
export declare class PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse extends SpeakeasyBase {
    contentType: string;
    person?: shared.Person;
    statusCode: number;
}

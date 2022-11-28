import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsLookupQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupKeyId?: string;
    groupKeyNamespace?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsLookupSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsLookupSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsLookupSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsLookupSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsLookupSecurityOption1;
    option2?: CloudidentityGroupsLookupSecurityOption2;
    option3?: CloudidentityGroupsLookupSecurityOption3;
}
export declare class CloudidentityGroupsLookupRequest extends SpeakeasyBase {
    queryParams: CloudidentityGroupsLookupQueryParams;
    security: CloudidentityGroupsLookupSecurity;
}
export declare class CloudidentityGroupsLookupResponse extends SpeakeasyBase {
    contentType: string;
    lookupGroupNameResponse?: shared.LookupGroupNameResponse;
    statusCode: number;
}

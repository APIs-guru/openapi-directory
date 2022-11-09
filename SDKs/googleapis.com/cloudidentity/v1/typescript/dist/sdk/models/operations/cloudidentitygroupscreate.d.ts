import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CloudidentityGroupsCreateInitialGroupConfigEnum {
    InitialGroupConfigUnspecified = "INITIAL_GROUP_CONFIG_UNSPECIFIED",
    WithInitialOwner = "WITH_INITIAL_OWNER",
    Empty = "EMPTY"
}
export declare class CloudidentityGroupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    initialGroupConfig?: CloudidentityGroupsCreateInitialGroupConfigEnum;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsCreateSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsCreateSecurityOption1;
    option2?: CloudidentityGroupsCreateSecurityOption2;
}
export declare class CloudidentityGroupsCreateRequest extends SpeakeasyBase {
    queryParams: CloudidentityGroupsCreateQueryParams;
    request?: shared.Group;
    security: CloudidentityGroupsCreateSecurity;
}
export declare class CloudidentityGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

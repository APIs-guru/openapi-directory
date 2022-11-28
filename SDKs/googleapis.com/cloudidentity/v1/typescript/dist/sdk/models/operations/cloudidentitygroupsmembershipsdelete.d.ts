import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityGroupsMembershipsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customer?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsMembershipsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsDeleteSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsDeleteSecurityOption1;
    option2?: CloudidentityGroupsMembershipsDeleteSecurityOption2;
}
export declare class CloudidentityGroupsMembershipsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsDeletePathParams;
    queryParams: CloudidentityGroupsMembershipsDeleteQueryParams;
    security: CloudidentityGroupsMembershipsDeleteSecurity;
}
export declare class CloudidentityGroupsMembershipsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

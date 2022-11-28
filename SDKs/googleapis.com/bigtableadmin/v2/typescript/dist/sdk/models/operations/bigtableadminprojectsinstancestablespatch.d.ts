import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesPatchSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesPatchSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesPatchSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesPatchSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesPatchSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesPatchSecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesPatchSecurityOption6;
}
export declare class BigtableadminProjectsInstancesTablesPatchRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesPatchPathParams;
    queryParams: BigtableadminProjectsInstancesTablesPatchQueryParams;
    request?: shared.TableInput;
    security: BigtableadminProjectsInstancesTablesPatchSecurity;
}
export declare class BigtableadminProjectsInstancesTablesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

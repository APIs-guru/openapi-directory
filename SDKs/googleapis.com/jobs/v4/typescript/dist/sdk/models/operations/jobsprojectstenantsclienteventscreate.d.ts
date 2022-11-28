import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsClientEventsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsClientEventsCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsClientEventsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsClientEventsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsClientEventsCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsClientEventsCreateSecurityOption1;
    option2?: JobsProjectsTenantsClientEventsCreateSecurityOption2;
}
export declare class JobsProjectsTenantsClientEventsCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsClientEventsCreatePathParams;
    queryParams: JobsProjectsTenantsClientEventsCreateQueryParams;
    request?: shared.ClientEvent;
    security: JobsProjectsTenantsClientEventsCreateSecurity;
}
export declare class JobsProjectsTenantsClientEventsCreateResponse extends SpeakeasyBase {
    clientEvent?: shared.ClientEvent;
    contentType: string;
    statusCode: number;
}

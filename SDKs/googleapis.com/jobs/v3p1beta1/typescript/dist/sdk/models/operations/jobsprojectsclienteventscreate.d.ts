import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsClientEventsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsClientEventsCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsClientEventsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsClientEventsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsClientEventsCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsClientEventsCreateSecurityOption1;
    option2?: JobsProjectsClientEventsCreateSecurityOption2;
}
export declare class JobsProjectsClientEventsCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsClientEventsCreatePathParams;
    queryParams: JobsProjectsClientEventsCreateQueryParams;
    request?: shared.CreateClientEventRequest;
    security: JobsProjectsClientEventsCreateSecurity;
}
export declare class JobsProjectsClientEventsCreateResponse extends SpeakeasyBase {
    clientEvent?: shared.ClientEvent;
    contentType: string;
    statusCode: number;
}

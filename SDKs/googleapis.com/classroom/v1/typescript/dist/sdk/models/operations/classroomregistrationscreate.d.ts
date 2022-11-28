import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClassroomRegistrationsCreateQueryParams extends SpeakeasyBase {
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
export declare class ClassroomRegistrationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClassroomRegistrationsCreateRequest extends SpeakeasyBase {
    queryParams: ClassroomRegistrationsCreateQueryParams;
    request?: shared.Registration;
    security: ClassroomRegistrationsCreateSecurity;
}
export declare class ClassroomRegistrationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    registration?: shared.Registration;
    statusCode: number;
}

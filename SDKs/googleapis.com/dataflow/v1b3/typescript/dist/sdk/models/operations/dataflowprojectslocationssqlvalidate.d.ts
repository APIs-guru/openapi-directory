import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsSqlValidatePathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsSqlValidateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsSqlValidateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSqlValidateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSqlValidateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsSqlValidateSecurityOption1;
    option2?: DataflowProjectsLocationsSqlValidateSecurityOption2;
}
export declare class DataflowProjectsLocationsSqlValidateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsSqlValidatePathParams;
    queryParams: DataflowProjectsLocationsSqlValidateQueryParams;
    security: DataflowProjectsLocationsSqlValidateSecurity;
}
export declare class DataflowProjectsLocationsSqlValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateResponse?: shared.ValidateResponse;
}

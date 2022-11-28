import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsOperationsWaitPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsOperationsWaitQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsOperationsWaitSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsWaitSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsWaitSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsOperationsWaitSecurityOption1;
    option2?: TranslateProjectsLocationsOperationsWaitSecurityOption2;
}
export declare class TranslateProjectsLocationsOperationsWaitRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsOperationsWaitPathParams;
    queryParams: TranslateProjectsLocationsOperationsWaitQueryParams;
    request?: shared.WaitOperationRequest;
    security: TranslateProjectsLocationsOperationsWaitSecurity;
}
export declare class TranslateProjectsLocationsOperationsWaitResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

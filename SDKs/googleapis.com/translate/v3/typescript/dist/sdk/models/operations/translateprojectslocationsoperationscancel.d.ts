import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslateProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranslateProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class TranslateProjectsLocationsOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranslateProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    option1?: TranslateProjectsLocationsOperationsCancelSecurityOption1;
    option2?: TranslateProjectsLocationsOperationsCancelSecurityOption2;
}
export declare class TranslateProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: TranslateProjectsLocationsOperationsCancelPathParams;
    queryParams: TranslateProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: TranslateProjectsLocationsOperationsCancelSecurity;
}
export declare class TranslateProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

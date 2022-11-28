import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchJobsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsPatchJobsCancelQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchJobsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchJobsCancelRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchJobsCancelPathParams;
    queryParams: OsconfigProjectsPatchJobsCancelQueryParams;
    request?: Map<string, any>;
    security: OsconfigProjectsPatchJobsCancelSecurity;
}
export declare class OsconfigProjectsPatchJobsCancelResponse extends SpeakeasyBase {
    contentType: string;
    patchJob?: shared.PatchJob;
    statusCode: number;
}

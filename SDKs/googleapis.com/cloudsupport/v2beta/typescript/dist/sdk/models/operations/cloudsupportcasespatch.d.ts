import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsupportCasesPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportCasesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesPatchRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesPatchPathParams;
    queryParams: CloudsupportCasesPatchQueryParams;
    request?: shared.CaseInput;
    security: CloudsupportCasesPatchSecurity;
}
export declare class CloudsupportCasesPatchResponse extends SpeakeasyBase {
    case?: shared.Case;
    contentType: string;
    statusCode: number;
}

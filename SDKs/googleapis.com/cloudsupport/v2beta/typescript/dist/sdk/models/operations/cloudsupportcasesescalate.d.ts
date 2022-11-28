import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesEscalatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsupportCasesEscalateQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportCasesEscalateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesEscalateRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesEscalatePathParams;
    queryParams: CloudsupportCasesEscalateQueryParams;
    request?: shared.EscalateCaseRequest;
    security: CloudsupportCasesEscalateSecurity;
}
export declare class CloudsupportCasesEscalateResponse extends SpeakeasyBase {
    case?: shared.Case;
    contentType: string;
    statusCode: number;
}

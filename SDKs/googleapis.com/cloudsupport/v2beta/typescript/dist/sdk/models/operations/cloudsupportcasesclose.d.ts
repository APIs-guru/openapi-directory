import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesClosePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsupportCasesCloseQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportCasesCloseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesCloseRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesClosePathParams;
    queryParams: CloudsupportCasesCloseQueryParams;
    request?: Map<string, any>;
    security: CloudsupportCasesCloseSecurity;
}
export declare class CloudsupportCasesCloseResponse extends SpeakeasyBase {
    case?: shared.Case;
    contentType: string;
    statusCode: number;
}

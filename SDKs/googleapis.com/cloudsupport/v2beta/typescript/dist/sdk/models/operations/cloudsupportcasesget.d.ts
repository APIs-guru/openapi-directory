import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportCasesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsupportCasesGetQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportCasesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportCasesGetRequest extends SpeakeasyBase {
    pathParams: CloudsupportCasesGetPathParams;
    queryParams: CloudsupportCasesGetQueryParams;
    security: CloudsupportCasesGetSecurity;
}
export declare class CloudsupportCasesGetResponse extends SpeakeasyBase {
    case?: shared.Case;
    contentType: string;
    statusCode: number;
}

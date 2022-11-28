import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsupportMediaDownloadPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsupportMediaDownloadQueryParams extends SpeakeasyBase {
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
export declare class CloudsupportMediaDownloadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsupportMediaDownloadRequest extends SpeakeasyBase {
    pathParams: CloudsupportMediaDownloadPathParams;
    queryParams: CloudsupportMediaDownloadQueryParams;
    security: CloudsupportMediaDownloadSecurity;
}
export declare class CloudsupportMediaDownloadResponse extends SpeakeasyBase {
    contentType: string;
    media?: shared.Media;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HomegraphDevicesRequestSyncQueryParams extends SpeakeasyBase {
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
export declare class HomegraphDevicesRequestSyncSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HomegraphDevicesRequestSyncRequest extends SpeakeasyBase {
    queryParams: HomegraphDevicesRequestSyncQueryParams;
    request?: shared.RequestSyncDevicesRequest;
    security: HomegraphDevicesRequestSyncSecurity;
}
export declare class HomegraphDevicesRequestSyncResponse extends SpeakeasyBase {
    contentType: string;
    requestSyncDevicesResponse?: Map<string, any>;
    statusCode: number;
}

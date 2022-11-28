import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HomegraphDevicesSyncQueryParams extends SpeakeasyBase {
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
export declare class HomegraphDevicesSyncSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HomegraphDevicesSyncRequest extends SpeakeasyBase {
    queryParams: HomegraphDevicesSyncQueryParams;
    request?: shared.SyncRequest;
    security: HomegraphDevicesSyncSecurity;
}
export declare class HomegraphDevicesSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncResponse?: shared.SyncResponse;
}

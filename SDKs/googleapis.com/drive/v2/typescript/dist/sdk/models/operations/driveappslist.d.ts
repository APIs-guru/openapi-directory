import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveAppsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    appFilterExtensions?: string;
    appFilterMimeTypes?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveAppsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveAppsListRequest extends SpeakeasyBase {
    queryParams: DriveAppsListQueryParams;
    security: DriveAppsListSecurity;
}
export declare class DriveAppsListResponse extends SpeakeasyBase {
    appList?: shared.AppList;
    contentType: string;
    statusCode: number;
}

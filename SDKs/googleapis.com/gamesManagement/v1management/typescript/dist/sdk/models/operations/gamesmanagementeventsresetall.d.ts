import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesManagementEventsResetAllQueryParams extends SpeakeasyBase {
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
export declare class GamesManagementEventsResetAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesManagementEventsResetAllRequest extends SpeakeasyBase {
    queryParams: GamesManagementEventsResetAllQueryParams;
    security: GamesManagementEventsResetAllSecurity;
}
export declare class GamesManagementEventsResetAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

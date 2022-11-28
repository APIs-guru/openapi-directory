import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesMetagameGetMetagameConfigQueryParams extends SpeakeasyBase {
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
export declare class GamesMetagameGetMetagameConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesMetagameGetMetagameConfigRequest extends SpeakeasyBase {
    queryParams: GamesMetagameGetMetagameConfigQueryParams;
    security: GamesMetagameGetMetagameConfigSecurity;
}
export declare class GamesMetagameGetMetagameConfigResponse extends SpeakeasyBase {
    contentType: string;
    metagameConfig?: shared.MetagameConfig;
    statusCode: number;
}

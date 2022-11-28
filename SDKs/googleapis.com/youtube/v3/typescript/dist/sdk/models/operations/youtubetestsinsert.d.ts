import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeTestsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    externalChannelId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeTestsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeTestsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeTestsInsertQueryParams;
    request?: shared.TestItem;
    security: YoutubeTestsInsertSecurity;
}
export declare class YoutubeTestsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testItem?: shared.TestItem;
}

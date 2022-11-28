import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveBroadcastsInsertCuepointQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    part?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveBroadcastsInsertCuepointSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsInsertCuepointSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsInsertCuepointSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsInsertCuepointSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsInsertCuepointSecurityOption1;
    option2?: YoutubeLiveBroadcastsInsertCuepointSecurityOption2;
    option3?: YoutubeLiveBroadcastsInsertCuepointSecurityOption3;
}
export declare class YoutubeLiveBroadcastsInsertCuepointRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsInsertCuepointQueryParams;
    request?: shared.Cuepoint;
    security: YoutubeLiveBroadcastsInsertCuepointSecurity;
}
export declare class YoutubeLiveBroadcastsInsertCuepointResponse extends SpeakeasyBase {
    contentType: string;
    cuepoint?: shared.Cuepoint;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IndexingUrlNotificationsGetMetadataQueryParams extends SpeakeasyBase {
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
    url?: string;
}
export declare class IndexingUrlNotificationsGetMetadataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IndexingUrlNotificationsGetMetadataRequest extends SpeakeasyBase {
    queryParams: IndexingUrlNotificationsGetMetadataQueryParams;
    security: IndexingUrlNotificationsGetMetadataSecurity;
}
export declare class IndexingUrlNotificationsGetMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    urlNotificationMetadata?: shared.UrlNotificationMetadata;
}

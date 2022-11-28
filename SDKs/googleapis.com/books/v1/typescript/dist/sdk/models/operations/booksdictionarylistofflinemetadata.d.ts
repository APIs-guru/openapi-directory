import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksDictionaryListOfflineMetadataQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cpksver: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksDictionaryListOfflineMetadataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksDictionaryListOfflineMetadataRequest extends SpeakeasyBase {
    queryParams: BooksDictionaryListOfflineMetadataQueryParams;
    security: BooksDictionaryListOfflineMetadataSecurity;
}
export declare class BooksDictionaryListOfflineMetadataResponse extends SpeakeasyBase {
    contentType: string;
    metadata?: shared.Metadata;
    statusCode: number;
}

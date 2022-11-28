import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksFamilysharingUnshareQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    docId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId?: string;
}
export declare class BooksFamilysharingUnshareSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksFamilysharingUnshareRequest extends SpeakeasyBase {
    queryParams: BooksFamilysharingUnshareQueryParams;
    security: BooksFamilysharingUnshareSecurity;
}
export declare class BooksFamilysharingUnshareResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

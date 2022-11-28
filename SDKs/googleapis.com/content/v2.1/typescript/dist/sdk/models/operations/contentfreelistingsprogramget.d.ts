import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentFreelistingsprogramGetPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentFreelistingsprogramGetQueryParams extends SpeakeasyBase {
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
export declare class ContentFreelistingsprogramGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentFreelistingsprogramGetRequest extends SpeakeasyBase {
    pathParams: ContentFreelistingsprogramGetPathParams;
    queryParams: ContentFreelistingsprogramGetQueryParams;
    security: ContentFreelistingsprogramGetSecurity;
}
export declare class ContentFreelistingsprogramGetResponse extends SpeakeasyBase {
    contentType: string;
    freeListingsProgramStatus?: shared.FreeListingsProgramStatus;
    statusCode: number;
}

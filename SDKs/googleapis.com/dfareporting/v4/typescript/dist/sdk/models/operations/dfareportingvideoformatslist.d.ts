import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingVideoFormatsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingVideoFormatsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingVideoFormatsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingVideoFormatsListRequest extends SpeakeasyBase {
    pathParams: DfareportingVideoFormatsListPathParams;
    queryParams: DfareportingVideoFormatsListQueryParams;
    security: DfareportingVideoFormatsListSecurity;
}
export declare class DfareportingVideoFormatsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoFormatsListResponse?: shared.VideoFormatsListResponse;
}

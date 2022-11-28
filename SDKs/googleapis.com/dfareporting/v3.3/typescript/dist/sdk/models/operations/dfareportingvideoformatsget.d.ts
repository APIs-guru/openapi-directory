import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingVideoFormatsGetPathParams extends SpeakeasyBase {
    id: number;
    profileId: string;
}
export declare class DfareportingVideoFormatsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingVideoFormatsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingVideoFormatsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingVideoFormatsGetPathParams;
    queryParams: DfareportingVideoFormatsGetQueryParams;
    security: DfareportingVideoFormatsGetSecurity;
}
export declare class DfareportingVideoFormatsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoFormat?: shared.VideoFormat;
}

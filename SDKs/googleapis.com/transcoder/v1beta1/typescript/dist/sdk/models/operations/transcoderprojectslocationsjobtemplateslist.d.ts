import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TranscoderProjectsLocationsJobTemplatesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranscoderProjectsLocationsJobTemplatesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranscoderProjectsLocationsJobTemplatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranscoderProjectsLocationsJobTemplatesListRequest extends SpeakeasyBase {
    pathParams: TranscoderProjectsLocationsJobTemplatesListPathParams;
    queryParams: TranscoderProjectsLocationsJobTemplatesListQueryParams;
    security: TranscoderProjectsLocationsJobTemplatesListSecurity;
}
export declare class TranscoderProjectsLocationsJobTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    listJobTemplatesResponse?: shared.ListJobTemplatesResponse;
    statusCode: number;
}

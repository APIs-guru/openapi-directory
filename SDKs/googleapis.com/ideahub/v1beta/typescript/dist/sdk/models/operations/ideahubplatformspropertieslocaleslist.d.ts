import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdeahubPlatformsPropertiesLocalesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdeahubPlatformsPropertiesLocalesListQueryParams extends SpeakeasyBase {
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
export declare class IdeahubPlatformsPropertiesLocalesListRequest extends SpeakeasyBase {
    pathParams: IdeahubPlatformsPropertiesLocalesListPathParams;
    queryParams: IdeahubPlatformsPropertiesLocalesListQueryParams;
}
export declare class IdeahubPlatformsPropertiesLocalesListResponse extends SpeakeasyBase {
    contentType: string;
    googleSearchIdeahubV1betaListAvailableLocalesResponse?: shared.GoogleSearchIdeahubV1betaListAvailableLocalesResponse;
    statusCode: number;
}

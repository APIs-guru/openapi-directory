import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdeahubPlatformsPropertiesIdeasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdeahubPlatformsPropertiesIdeasListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdeahubPlatformsPropertiesIdeasListRequest extends SpeakeasyBase {
    pathParams: IdeahubPlatformsPropertiesIdeasListPathParams;
    queryParams: IdeahubPlatformsPropertiesIdeasListQueryParams;
}
export declare class IdeahubPlatformsPropertiesIdeasListResponse extends SpeakeasyBase {
    contentType: string;
    googleSearchIdeahubV1alphaListIdeasResponse?: shared.GoogleSearchIdeahubV1alphaListIdeasResponse;
    statusCode: number;
}

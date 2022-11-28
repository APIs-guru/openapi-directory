import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdeahubIdeasListQueryParams extends SpeakeasyBase {
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
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdeahubIdeasListRequest extends SpeakeasyBase {
    queryParams: IdeahubIdeasListQueryParams;
}
export declare class IdeahubIdeasListResponse extends SpeakeasyBase {
    contentType: string;
    googleSearchIdeahubV1alphaListIdeasResponse?: shared.GoogleSearchIdeahubV1alphaListIdeasResponse;
    statusCode: number;
}

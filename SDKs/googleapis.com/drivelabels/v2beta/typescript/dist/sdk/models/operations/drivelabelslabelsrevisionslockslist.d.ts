import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsLocksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DrivelabelsLabelsRevisionsLocksListQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsRevisionsLocksListRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsLocksListPathParams;
    queryParams: DrivelabelsLabelsRevisionsLocksListQueryParams;
}
export declare class DrivelabelsLabelsRevisionsLocksListResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaListLabelLocksResponse?: shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse;
    statusCode: number;
}

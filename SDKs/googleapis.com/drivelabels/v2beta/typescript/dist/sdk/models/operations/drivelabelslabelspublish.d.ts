import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsPublishPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DrivelabelsLabelsPublishQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsPublishRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsPublishPathParams;
    queryParams: DrivelabelsLabelsPublishQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaPublishLabelRequest;
}
export declare class DrivelabelsLabelsPublishResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabel?: shared.GoogleAppsDriveLabelsV2betaLabel;
    statusCode: number;
}

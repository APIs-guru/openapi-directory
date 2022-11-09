import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdeahubPlatformsPropertiesTopicStatesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdeahubPlatformsPropertiesTopicStatesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdeahubPlatformsPropertiesTopicStatesPatchRequest extends SpeakeasyBase {
    pathParams: IdeahubPlatformsPropertiesTopicStatesPatchPathParams;
    queryParams: IdeahubPlatformsPropertiesTopicStatesPatchQueryParams;
    request?: shared.GoogleSearchIdeahubV1betaTopicState;
}
export declare class IdeahubPlatformsPropertiesTopicStatesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleSearchIdeahubV1betaTopicState?: shared.GoogleSearchIdeahubV1betaTopicState;
    statusCode: number;
}

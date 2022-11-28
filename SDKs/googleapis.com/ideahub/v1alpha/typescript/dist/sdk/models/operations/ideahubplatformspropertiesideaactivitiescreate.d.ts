import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams extends SpeakeasyBase {
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
export declare class IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest extends SpeakeasyBase {
    pathParams: IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams;
    queryParams: IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams;
    request?: shared.GoogleSearchIdeahubV1alphaIdeaActivity;
}
export declare class IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleSearchIdeahubV1alphaIdeaActivity?: shared.GoogleSearchIdeahubV1alphaIdeaActivity;
    statusCode: number;
}

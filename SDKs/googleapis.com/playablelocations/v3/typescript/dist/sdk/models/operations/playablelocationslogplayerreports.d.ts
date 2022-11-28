import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlayablelocationsLogPlayerReportsQueryParams extends SpeakeasyBase {
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
export declare class PlayablelocationsLogPlayerReportsRequest extends SpeakeasyBase {
    queryParams: PlayablelocationsLogPlayerReportsQueryParams;
    request?: shared.GoogleMapsPlayablelocationsV3LogPlayerReportsRequest;
}
export declare class PlayablelocationsLogPlayerReportsResponse extends SpeakeasyBase {
    contentType: string;
    googleMapsPlayablelocationsV3LogPlayerReportsResponse?: Map<string, any>;
    statusCode: number;
}

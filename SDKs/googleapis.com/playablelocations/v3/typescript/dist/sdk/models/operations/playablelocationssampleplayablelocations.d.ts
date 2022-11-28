import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlayablelocationsSamplePlayableLocationsQueryParams extends SpeakeasyBase {
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
export declare class PlayablelocationsSamplePlayableLocationsRequest extends SpeakeasyBase {
    queryParams: PlayablelocationsSamplePlayableLocationsQueryParams;
    request?: shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest;
}
export declare class PlayablelocationsSamplePlayableLocationsResponse extends SpeakeasyBase {
    contentType: string;
    googleMapsPlayablelocationsV3SamplePlayableLocationsResponse?: shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlayablelocationsLogImpressionsQueryParams extends SpeakeasyBase {
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
export declare class PlayablelocationsLogImpressionsRequest extends SpeakeasyBase {
    queryParams: PlayablelocationsLogImpressionsQueryParams;
    request?: shared.GoogleMapsPlayablelocationsV3LogImpressionsRequest;
}
export declare class PlayablelocationsLogImpressionsResponse extends SpeakeasyBase {
    contentType: string;
    googleMapsPlayablelocationsV3LogImpressionsResponse?: Map<string, any>;
    statusCode: number;
}

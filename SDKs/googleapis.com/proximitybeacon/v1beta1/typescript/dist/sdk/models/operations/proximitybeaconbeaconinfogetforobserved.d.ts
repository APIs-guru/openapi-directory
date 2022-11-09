import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconinfoGetforobservedQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconinfoGetforobservedRequest extends SpeakeasyBase {
    queryParams: ProximitybeaconBeaconinfoGetforobservedQueryParams;
    request?: shared.GetInfoForObservedBeaconsRequest;
}
export declare class ProximitybeaconBeaconinfoGetforobservedResponse extends SpeakeasyBase {
    contentType: string;
    getInfoForObservedBeaconsResponse?: shared.GetInfoForObservedBeaconsResponse;
    statusCode: number;
}

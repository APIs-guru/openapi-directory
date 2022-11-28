import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementGroupsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementGroupsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingPlacementGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementGroupsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementGroupsPatchPathParams;
    queryParams: DfareportingPlacementGroupsPatchQueryParams;
    request?: shared.PlacementGroup;
    security: DfareportingPlacementGroupsPatchSecurity;
}
export declare class DfareportingPlacementGroupsPatchResponse extends SpeakeasyBase {
    contentType: string;
    placementGroup?: shared.PlacementGroup;
    statusCode: number;
}

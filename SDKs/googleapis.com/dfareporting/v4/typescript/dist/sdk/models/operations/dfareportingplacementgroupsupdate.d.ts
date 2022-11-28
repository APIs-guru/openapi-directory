import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementGroupsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementGroupsUpdatePathParams;
    queryParams: DfareportingPlacementGroupsUpdateQueryParams;
    request?: shared.PlacementGroup;
    security: DfareportingPlacementGroupsUpdateSecurity;
}
export declare class DfareportingPlacementGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    placementGroup?: shared.PlacementGroup;
    statusCode: number;
}

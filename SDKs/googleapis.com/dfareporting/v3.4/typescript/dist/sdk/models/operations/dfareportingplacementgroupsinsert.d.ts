import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementGroupsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementGroupsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementGroupsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementGroupsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementGroupsInsertPathParams;
    queryParams: DfareportingPlacementGroupsInsertQueryParams;
    request?: shared.PlacementGroup;
    security: DfareportingPlacementGroupsInsertSecurity;
}
export declare class DfareportingPlacementGroupsInsertResponse extends SpeakeasyBase {
    contentType: string;
    placementGroup?: shared.PlacementGroup;
    statusCode: number;
}

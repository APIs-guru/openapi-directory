import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementsPatchPathParams;
    queryParams: DfareportingPlacementsPatchQueryParams;
    request?: shared.Placement;
    security: DfareportingPlacementsPatchSecurity;
}
export declare class DfareportingPlacementsPatchResponse extends SpeakeasyBase {
    contentType: string;
    placement?: shared.Placement;
    statusCode: number;
}

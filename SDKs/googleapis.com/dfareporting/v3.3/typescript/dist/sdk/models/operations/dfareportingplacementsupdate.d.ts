import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementsUpdatePathParams;
    queryParams: DfareportingPlacementsUpdateQueryParams;
    request?: shared.Placement;
    security: DfareportingPlacementsUpdateSecurity;
}
export declare class DfareportingPlacementsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    placement?: shared.Placement;
    statusCode: number;
}

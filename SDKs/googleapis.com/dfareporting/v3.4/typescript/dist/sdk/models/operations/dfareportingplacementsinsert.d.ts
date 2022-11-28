import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementsInsertPathParams;
    queryParams: DfareportingPlacementsInsertQueryParams;
    request?: shared.Placement;
    security: DfareportingPlacementsInsertSecurity;
}
export declare class DfareportingPlacementsInsertResponse extends SpeakeasyBase {
    contentType: string;
    placement?: shared.Placement;
    statusCode: number;
}

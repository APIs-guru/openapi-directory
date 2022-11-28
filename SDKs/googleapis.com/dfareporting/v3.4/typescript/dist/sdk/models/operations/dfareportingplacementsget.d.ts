import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingPlacementsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementsGetPathParams;
    queryParams: DfareportingPlacementsGetQueryParams;
    security: DfareportingPlacementsGetSecurity;
}
export declare class DfareportingPlacementsGetResponse extends SpeakeasyBase {
    contentType: string;
    placement?: shared.Placement;
    statusCode: number;
}

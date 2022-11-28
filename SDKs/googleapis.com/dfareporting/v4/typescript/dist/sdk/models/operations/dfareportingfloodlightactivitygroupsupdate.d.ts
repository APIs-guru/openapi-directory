import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivityGroupsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivityGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightActivityGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivityGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivityGroupsUpdatePathParams;
    queryParams: DfareportingFloodlightActivityGroupsUpdateQueryParams;
    request?: shared.FloodlightActivityGroup;
    security: DfareportingFloodlightActivityGroupsUpdateSecurity;
}
export declare class DfareportingFloodlightActivityGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivityGroup?: shared.FloodlightActivityGroup;
    statusCode: number;
}

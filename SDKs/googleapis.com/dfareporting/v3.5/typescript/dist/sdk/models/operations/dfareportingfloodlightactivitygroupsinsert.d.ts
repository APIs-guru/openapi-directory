import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivityGroupsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivityGroupsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightActivityGroupsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivityGroupsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivityGroupsInsertPathParams;
    queryParams: DfareportingFloodlightActivityGroupsInsertQueryParams;
    request?: shared.FloodlightActivityGroup;
    security: DfareportingFloodlightActivityGroupsInsertSecurity;
}
export declare class DfareportingFloodlightActivityGroupsInsertResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivityGroup?: shared.FloodlightActivityGroup;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivityGroupsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingFloodlightActivityGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightActivityGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivityGroupsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivityGroupsGetPathParams;
    queryParams: DfareportingFloodlightActivityGroupsGetQueryParams;
    security: DfareportingFloodlightActivityGroupsGetSecurity;
}
export declare class DfareportingFloodlightActivityGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivityGroup?: shared.FloodlightActivityGroup;
    statusCode: number;
}

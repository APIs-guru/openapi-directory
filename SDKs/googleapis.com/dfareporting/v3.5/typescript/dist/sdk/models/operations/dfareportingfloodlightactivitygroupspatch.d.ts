import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivityGroupsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivityGroupsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightActivityGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivityGroupsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivityGroupsPatchPathParams;
    queryParams: DfareportingFloodlightActivityGroupsPatchQueryParams;
    request?: shared.FloodlightActivityGroup;
    security: DfareportingFloodlightActivityGroupsPatchSecurity;
}
export declare class DfareportingFloodlightActivityGroupsPatchResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivityGroup?: shared.FloodlightActivityGroup;
    statusCode: number;
}

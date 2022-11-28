import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsFindingsBulkMutePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsFindingsBulkMuteQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsFindingsBulkMuteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsFindingsBulkMuteRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsFindingsBulkMutePathParams;
    queryParams: SecuritycenterProjectsFindingsBulkMuteQueryParams;
    request?: shared.BulkMuteFindingsRequest;
    security: SecuritycenterProjectsFindingsBulkMuteSecurity;
}
export declare class SecuritycenterProjectsFindingsBulkMuteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

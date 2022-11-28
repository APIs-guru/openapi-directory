import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingConnectionTypesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingConnectionTypesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingConnectionTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingConnectionTypesListRequest extends SpeakeasyBase {
    pathParams: DfareportingConnectionTypesListPathParams;
    queryParams: DfareportingConnectionTypesListQueryParams;
    security: DfareportingConnectionTypesListSecurity;
}
export declare class DfareportingConnectionTypesListResponse extends SpeakeasyBase {
    connectionTypesListResponse?: shared.ConnectionTypesListResponse;
    contentType: string;
    statusCode: number;
}

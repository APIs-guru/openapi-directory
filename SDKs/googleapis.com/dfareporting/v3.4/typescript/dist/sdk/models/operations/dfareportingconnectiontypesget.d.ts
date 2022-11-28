import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingConnectionTypesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingConnectionTypesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingConnectionTypesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingConnectionTypesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingConnectionTypesGetPathParams;
    queryParams: DfareportingConnectionTypesGetQueryParams;
    security: DfareportingConnectionTypesGetSecurity;
}
export declare class DfareportingConnectionTypesGetResponse extends SpeakeasyBase {
    connectionType?: shared.ConnectionType;
    contentType: string;
    statusCode: number;
}

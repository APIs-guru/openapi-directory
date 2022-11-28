import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsCompatibleFieldsQueryPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingReportsCompatibleFieldsQueryQueryParams extends SpeakeasyBase {
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
export declare class DfareportingReportsCompatibleFieldsQuerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsCompatibleFieldsQueryRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsCompatibleFieldsQueryPathParams;
    queryParams: DfareportingReportsCompatibleFieldsQueryQueryParams;
    request?: shared.Report;
    security: DfareportingReportsCompatibleFieldsQuerySecurity;
}
export declare class DfareportingReportsCompatibleFieldsQueryResponse extends SpeakeasyBase {
    compatibleFields?: shared.CompatibleFields;
    contentType: string;
    statusCode: number;
}

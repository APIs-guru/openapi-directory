import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsScanConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsScanConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProjectsScanConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsScanConfigsListRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsScanConfigsListPathParams;
    queryParams: ContaineranalysisProjectsScanConfigsListQueryParams;
    security: ContaineranalysisProjectsScanConfigsListSecurity;
}
export declare class ContaineranalysisProjectsScanConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listScanConfigsResponse?: shared.ListScanConfigsResponse;
    statusCode: number;
}

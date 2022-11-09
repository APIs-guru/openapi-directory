import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsTensorflowVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsTensorflowVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsTensorflowVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsTensorflowVersionsListRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsTensorflowVersionsListPathParams;
    queryParams: TpuProjectsLocationsTensorflowVersionsListQueryParams;
    security: TpuProjectsLocationsTensorflowVersionsListSecurity;
}
export declare class TpuProjectsLocationsTensorflowVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listTensorFlowVersionsResponse?: shared.ListTensorFlowVersionsResponse;
    statusCode: number;
}

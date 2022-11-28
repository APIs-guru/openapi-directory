import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VaultOperationsListQueryParams extends SpeakeasyBase {
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
export declare class VaultOperationsListRequest extends SpeakeasyBase {
    pathParams: VaultOperationsListPathParams;
    queryParams: VaultOperationsListQueryParams;
}
export declare class VaultOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}

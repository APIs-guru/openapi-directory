import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceconsumermanagementOperationsListQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementOperationsListRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementOperationsListPathParams;
    queryParams: ServiceconsumermanagementOperationsListQueryParams;
    security: ServiceconsumermanagementOperationsListSecurity;
}
export declare class ServiceconsumermanagementOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}

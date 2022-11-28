import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainRecordsPathParams extends SpeakeasyBase {
    domainId: number;
}
export declare class GetDomainRecordsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetDomainRecordsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetDomainRecords200ApplicationJson extends SpeakeasyBase {
    data?: shared.DomainRecord[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetDomainRecordsRequest extends SpeakeasyBase {
    pathParams: GetDomainRecordsPathParams;
    queryParams: GetDomainRecordsQueryParams;
    security: GetDomainRecordsSecurity;
}
export declare class GetDomainRecordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDomainRecords200ApplicationJsonObject?: GetDomainRecords200ApplicationJson;
}

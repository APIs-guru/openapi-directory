import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RetrieveApplicationsQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    pageIndex?: number;
    pageSize?: number;
}
export declare class RetrieveApplicationsRequest extends SpeakeasyBase {
    queryParams: RetrieveApplicationsQueryParams;
}
export declare class RetrieveApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    applications?: shared.Applications;
}

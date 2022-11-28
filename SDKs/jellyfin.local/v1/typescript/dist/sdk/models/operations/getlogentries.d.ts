import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogEntriesQueryParams extends SpeakeasyBase {
    hasUserId?: boolean;
    limit?: number;
    minDate?: Date;
    startIndex?: number;
}
export declare class GetLogEntriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLogEntriesRequest extends SpeakeasyBase {
    queryParams: GetLogEntriesQueryParams;
    security: GetLogEntriesSecurity;
}
export declare class GetLogEntriesResponse extends SpeakeasyBase {
    activityLogEntryQueryResult?: shared.ActivityLogEntryQueryResult;
    contentType: string;
    statusCode: number;
}

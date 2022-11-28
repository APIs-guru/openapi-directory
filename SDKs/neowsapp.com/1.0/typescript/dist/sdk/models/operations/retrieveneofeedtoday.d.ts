import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveNeoFeedTodayQueryParams extends SpeakeasyBase {
    detailed?: boolean;
}
export declare class RetrieveNeoFeedTodayRequest extends SpeakeasyBase {
    queryParams: RetrieveNeoFeedTodayQueryParams;
}
export declare class RetrieveNeoFeedTodayResponse extends SpeakeasyBase {
    contentType: string;
    nearEarthObjectList?: shared.NearEarthObjectList;
    statusCode: number;
}

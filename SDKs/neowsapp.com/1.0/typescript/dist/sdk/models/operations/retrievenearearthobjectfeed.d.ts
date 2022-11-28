import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveNearEarthObjectFeedQueryParams extends SpeakeasyBase {
    detailed?: boolean;
    endDate?: string;
    startDate?: string;
}
export declare class RetrieveNearEarthObjectFeedRequest extends SpeakeasyBase {
    queryParams: RetrieveNearEarthObjectFeedQueryParams;
}
export declare class RetrieveNearEarthObjectFeedResponse extends SpeakeasyBase {
    contentType: string;
    nearEarthObjectList?: shared.NearEarthObjectList;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAddedSeriesQueryParams extends SpeakeasyBase {
    tvdbId?: string;
}
export declare class PostAddedSeriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostAddedSeriesRequest extends SpeakeasyBase {
    queryParams: PostAddedSeriesQueryParams;
    security: PostAddedSeriesSecurity;
}
export declare class PostAddedSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

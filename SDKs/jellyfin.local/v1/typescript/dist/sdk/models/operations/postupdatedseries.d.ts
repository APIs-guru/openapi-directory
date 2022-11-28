import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdatedSeriesQueryParams extends SpeakeasyBase {
    tvdbId?: string;
}
export declare class PostUpdatedSeriesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostUpdatedSeriesRequest extends SpeakeasyBase {
    queryParams: PostUpdatedSeriesQueryParams;
    security: PostUpdatedSeriesSecurity;
}
export declare class PostUpdatedSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

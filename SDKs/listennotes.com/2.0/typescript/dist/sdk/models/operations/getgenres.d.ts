import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenresQueryParams extends SpeakeasyBase {
    topLevelOnly?: number;
}
export declare class GetGenresHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class GetGenresRequest extends SpeakeasyBase {
    queryParams: GetGenresQueryParams;
    headers: GetGenresHeaders;
}
export declare class GetGenresResponse extends SpeakeasyBase {
    contentType: string;
    getGenresResponse?: shared.GetGenresResponse;
    headers: Map<string, string[]>;
    statusCode: number;
}

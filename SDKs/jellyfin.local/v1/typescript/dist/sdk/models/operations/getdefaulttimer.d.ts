import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDefaultTimerQueryParams extends SpeakeasyBase {
    programId?: string;
}
export declare class GetDefaultTimerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDefaultTimerRequest extends SpeakeasyBase {
    queryParams: GetDefaultTimerQueryParams;
    security: GetDefaultTimerSecurity;
}
export declare class GetDefaultTimerResponse extends SpeakeasyBase {
    contentType: string;
    seriesTimerInfoDto?: shared.SeriesTimerInfoDto;
    statusCode: number;
}

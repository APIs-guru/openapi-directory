import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloseLiveStreamQueryParams extends SpeakeasyBase {
    liveStreamId: string;
}
export declare class CloseLiveStreamSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CloseLiveStreamRequest extends SpeakeasyBase {
    queryParams: CloseLiveStreamQueryParams;
    security: CloseLiveStreamSecurity;
}
export declare class CloseLiveStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

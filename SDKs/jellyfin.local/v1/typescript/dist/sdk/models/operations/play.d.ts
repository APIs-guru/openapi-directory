import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlayPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class PlayQueryParams extends SpeakeasyBase {
    itemIds: string[];
    playCommand: shared.PlayCommandEnum;
    startPositionTicks?: number;
}
export declare class PlaySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PlayRequest extends SpeakeasyBase {
    pathParams: PlayPathParams;
    queryParams: PlayQueryParams;
    security: PlaySecurity;
}
export declare class PlayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

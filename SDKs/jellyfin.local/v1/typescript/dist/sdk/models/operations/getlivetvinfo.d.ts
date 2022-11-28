import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLiveTvInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLiveTvInfoRequest extends SpeakeasyBase {
    security: GetLiveTvInfoSecurity;
}
export declare class GetLiveTvInfoResponse extends SpeakeasyBase {
    contentType: string;
    liveTvInfo?: shared.LiveTvInfo;
    statusCode: number;
}

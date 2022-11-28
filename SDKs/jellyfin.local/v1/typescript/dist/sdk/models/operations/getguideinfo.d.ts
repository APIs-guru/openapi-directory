import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGuideInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetGuideInfoRequest extends SpeakeasyBase {
    security: GetGuideInfoSecurity;
}
export declare class GetGuideInfoResponse extends SpeakeasyBase {
    contentType: string;
    guideInfo?: shared.GuideInfo;
    statusCode: number;
}

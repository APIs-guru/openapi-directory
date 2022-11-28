import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportSessionEndedSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ReportSessionEndedRequest extends SpeakeasyBase {
    security: ReportSessionEndedSecurity;
}
export declare class ReportSessionEndedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReportsCreateRequest extends SpeakeasyBase {
    request: shared.ReportRequest;
}
export declare class ReportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    reportResponse?: shared.ReportResponse;
    statusCode: number;
}

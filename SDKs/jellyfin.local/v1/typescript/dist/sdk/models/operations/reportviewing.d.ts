import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportViewingQueryParams extends SpeakeasyBase {
    itemId: string;
    sessionId?: string;
}
export declare class ReportViewingSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ReportViewingRequest extends SpeakeasyBase {
    queryParams: ReportViewingQueryParams;
    security: ReportViewingSecurity;
}
export declare class ReportViewingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSubtitlePathParams extends SpeakeasyBase {
    index: number;
    itemId: string;
}
export declare class DeleteSubtitleSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteSubtitleRequest extends SpeakeasyBase {
    pathParams: DeleteSubtitlePathParams;
    security: DeleteSubtitleSecurity;
}
export declare class DeleteSubtitleResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}

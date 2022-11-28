import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayContentPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class DisplayContentQueryParams extends SpeakeasyBase {
    itemId: string;
    itemName: string;
    itemType: string;
}
export declare class DisplayContentSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DisplayContentRequest extends SpeakeasyBase {
    pathParams: DisplayContentPathParams;
    queryParams: DisplayContentQueryParams;
    security: DisplayContentSecurity;
}
export declare class DisplayContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

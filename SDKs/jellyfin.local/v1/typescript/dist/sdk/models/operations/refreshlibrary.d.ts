import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RefreshLibrarySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RefreshLibraryRequest extends SpeakeasyBase {
    security: RefreshLibrarySecurity;
}
export declare class RefreshLibraryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

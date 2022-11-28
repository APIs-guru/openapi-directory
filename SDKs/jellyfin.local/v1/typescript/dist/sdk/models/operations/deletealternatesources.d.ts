import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAlternateSourcesPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class DeleteAlternateSourcesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteAlternateSourcesRequest extends SpeakeasyBase {
    pathParams: DeleteAlternateSourcesPathParams;
    security: DeleteAlternateSourcesSecurity;
}
export declare class DeleteAlternateSourcesResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}

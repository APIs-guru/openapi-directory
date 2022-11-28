import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPagesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutPagesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutPagesIdJsonRequest extends SpeakeasyBase {
    pathParams: PutPagesIdJsonPathParams;
    queryParams: PutPagesIdJsonQueryParams;
    request: shared.PageModify;
}
export declare class PutPagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    page?: shared.Page;
    statusCode: number;
}

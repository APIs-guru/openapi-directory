import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPagesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPagesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetPagesIdJsonRequest extends SpeakeasyBase {
    pathParams: GetPagesIdJsonPathParams;
    queryParams: GetPagesIdJsonQueryParams;
}
export declare class GetPagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    page?: shared.Page;
    statusCode: number;
}

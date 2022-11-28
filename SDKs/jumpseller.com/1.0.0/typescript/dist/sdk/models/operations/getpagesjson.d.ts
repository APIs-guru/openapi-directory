import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPagesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetPagesJsonRequest extends SpeakeasyBase {
    queryParams: GetPagesJsonQueryParams;
}
export declare class GetPagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    pages?: shared.Page[];
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHooksJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetHooksJsonRequest extends SpeakeasyBase {
    queryParams: GetHooksJsonQueryParams;
}
export declare class GetHooksJsonResponse extends SpeakeasyBase {
    contentType: string;
    hooks?: shared.Hook[];
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPagesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostPagesJsonRequest extends SpeakeasyBase {
    queryParams: PostPagesJsonQueryParams;
    request: shared.PageModify;
}
export declare class PostPagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    statusCode: number;
}

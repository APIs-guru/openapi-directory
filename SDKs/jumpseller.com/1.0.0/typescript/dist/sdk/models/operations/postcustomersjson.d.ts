import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCustomersJsonRequest extends SpeakeasyBase {
    queryParams: PostCustomersJsonQueryParams;
    request: shared.CustomerWithPasswordNoId;
}
export declare class PostCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    notFound?: any;
    statusCode: number;
}

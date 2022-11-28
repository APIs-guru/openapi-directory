import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomersIdFieldsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostCustomersIdFieldsQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCustomersIdFieldsRequest extends SpeakeasyBase {
    pathParams: PostCustomersIdFieldsPathParams;
    queryParams: PostCustomersIdFieldsQueryParams;
    request: shared.CustomerAdditionalFieldEdit;
}
export declare class PostCustomersIdFieldsResponse extends SpeakeasyBase {
    contentType: string;
    customerAdditionalField?: shared.CustomerAdditionalField;
    notFound?: any;
    statusCode: number;
}

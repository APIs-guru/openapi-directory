import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCategoriesPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class CreateCategoriesSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class CreateCategoriesRequest extends SpeakeasyBase {
    pathParams: CreateCategoriesPathParams;
    request: shared.CategoryRequest;
    security: CreateCategoriesSecurity;
}
export declare class CreateCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

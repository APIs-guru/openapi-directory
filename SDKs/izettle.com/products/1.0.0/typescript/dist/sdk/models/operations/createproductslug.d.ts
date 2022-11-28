import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProductSlugPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class CreateProductSlugSecurity extends SpeakeasyBase {
    zettleOauth?: shared.SchemeZettleOauth;
    zettleApiKey?: shared.SchemeZettleApiKey;
}
export declare class CreateProductSlugRequest extends SpeakeasyBase {
    pathParams: CreateProductSlugPathParams;
    request: shared.CreateSlugRequest;
    security: CreateProductSlugSecurity;
}
export declare class CreateProductSlugResponse extends SpeakeasyBase {
    contentType: string;
    slugResponse?: shared.SlugResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesLanguagesJsonQueryParams extends SpeakeasyBase {
    max?: number;
    offset?: number;
    sort?: string;
}
export declare class GetResourcesLanguagesJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesLanguagesJsonQueryParams;
}
export declare class GetResourcesLanguagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    languageWrappeds?: shared.LanguageWrapped[];
    statusCode: number;
}

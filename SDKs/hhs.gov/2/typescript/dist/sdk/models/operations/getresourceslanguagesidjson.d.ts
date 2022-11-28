import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesLanguagesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesLanguagesIdJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesLanguagesIdJsonPathParams;
}
export declare class GetResourcesLanguagesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    languageWrappeds?: shared.LanguageWrapped[];
    statusCode: number;
}

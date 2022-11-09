import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourcesTagsTagLanguagesFormatPathParams extends SpeakeasyBase {
    format: string;
}
export declare class GetResourcesTagsTagLanguagesFormatRequest extends SpeakeasyBase {
    pathParams: GetResourcesTagsTagLanguagesFormatPathParams;
}
export declare class GetResourcesTagsTagLanguagesFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagLanguageMarshallerWrappeds?: shared.TagLanguageMarshallerWrapped[];
}

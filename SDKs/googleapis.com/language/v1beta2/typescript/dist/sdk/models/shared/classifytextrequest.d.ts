import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
import { Document } from "./document";
/**
 * The document classification request message.
**/
export declare class ClassifyTextRequest extends SpeakeasyBase {
    classificationModelOptions?: ClassificationModelOptions;
    document?: Document;
}

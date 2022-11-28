import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ExtendSchemaRequest is the request message for ExtendSchema method.
**/
export declare class ExtendSchemaRequest extends SpeakeasyBase {
    description?: string;
    fileContents?: string;
    gcsPath?: string;
}

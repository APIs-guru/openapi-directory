import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * Request message for StepService.PublishXunitXmlFiles.
**/
export declare class PublishXunitXmlFilesRequest extends SpeakeasyBase {
    xunitXmlFiles?: FileReference[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// PublishXunitXmlFilesRequest
/** 
 * Request message for StepService.PublishXunitXmlFiles.
**/
export class PublishXunitXmlFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=xunitXmlFiles", elemType: FileReference })
  xunitXmlFiles?: FileReference[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileReference } from "./filereference";


// PublishXunitXmlFilesRequest
/** 
 * Request message for StepService.PublishXunitXmlFiles.
**/
export class PublishXunitXmlFilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=xunitXmlFiles", elemType: shared.FileReference })
  xunitXmlFiles?: FileReference[];
}

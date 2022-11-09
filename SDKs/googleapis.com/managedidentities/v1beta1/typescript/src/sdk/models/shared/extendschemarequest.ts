import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExtendSchemaRequest
/** 
 * ExtendSchemaRequest is the request message for ExtendSchema method.
**/
export class ExtendSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fileContents" })
  fileContents?: string;

  @Metadata({ data: "json, name=gcsPath" })
  gcsPath?: string;
}

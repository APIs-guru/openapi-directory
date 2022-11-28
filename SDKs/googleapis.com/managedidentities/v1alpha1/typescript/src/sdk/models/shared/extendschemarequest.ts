import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExtendSchemaRequest
/** 
 * ExtendSchemaRequest is the request message for ExtendSchema method.
**/
export class ExtendSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fileContents" })
  fileContents?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsPath" })
  gcsPath?: string;
}

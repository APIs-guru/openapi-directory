import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceLocation
/** 
 * Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.
**/
export class SourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=lineNumber" })
  lineNumber?: number;
}

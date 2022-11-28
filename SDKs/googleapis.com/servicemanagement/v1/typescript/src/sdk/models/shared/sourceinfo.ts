import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceInfo
/** 
 * Source information used to create a Service Config
**/
export class SourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceFiles" })
  sourceFiles?: Map<string, any>[];
}

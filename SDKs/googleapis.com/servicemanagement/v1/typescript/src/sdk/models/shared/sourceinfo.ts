import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceInfo
/** 
 * Source information used to create a Service Config
**/
export class SourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceFiles" })
  sourceFiles?: Map<string, any>[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";
import { FileReference } from "./filereference";


// ResultsStorage
/** 
 * The storage for test results.
**/
export class ResultsStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=resultsStoragePath" })
  resultsStoragePath?: FileReference;

  @Metadata({ data: "json, name=xunitXmlFile" })
  xunitXmlFile?: FileReference;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// ResultsStorage
/** 
 * The storage for test results.
**/
export class ResultsStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resultsStoragePath" })
  resultsStoragePath?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=xunitXmlFile" })
  xunitXmlFile?: FileReference;
}

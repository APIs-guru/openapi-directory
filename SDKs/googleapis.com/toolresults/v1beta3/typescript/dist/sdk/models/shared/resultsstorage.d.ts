import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * The storage for test results.
**/
export declare class ResultsStorage extends SpeakeasyBase {
    resultsStoragePath?: FileReference;
    xunitXmlFile?: FileReference;
}

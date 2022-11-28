import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { FileReference } from "./filereference";



// TestSuiteOverview
/** 
 * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
**/
export class TestSuiteOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elapsedTime" })
  elapsedTime?: Duration;

  @SpeakeasyMetadata({ data: "json, name=errorCount" })
  errorCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @SpeakeasyMetadata({ data: "json, name=flakyCount" })
  flakyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=skippedCount" })
  skippedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=xmlSource" })
  xmlSource?: FileReference;
}

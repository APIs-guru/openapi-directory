import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";
import { FileReference } from "./filereference";


// TestSuiteOverview
/** 
 * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
**/
export class TestSuiteOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=elapsedTime" })
  elapsedTime?: Duration;

  @Metadata({ data: "json, name=errorCount" })
  errorCount?: number;

  @Metadata({ data: "json, name=failureCount" })
  failureCount?: number;

  @Metadata({ data: "json, name=flakyCount" })
  flakyCount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=skippedCount" })
  skippedCount?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=xmlSource" })
  xmlSource?: FileReference;
}

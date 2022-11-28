import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3EvaluationCounters
/** 
 * Evaluation counters for the documents that were used.
**/
export class GoogleCloudDocumentaiV1beta3EvaluationCounters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluatedDocumentsCount" })
  evaluatedDocumentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=failedDocumentsCount" })
  failedDocumentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=inputDocumentsCount" })
  inputDocumentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=invalidDocumentsCount" })
  invalidDocumentsCount?: number;
}

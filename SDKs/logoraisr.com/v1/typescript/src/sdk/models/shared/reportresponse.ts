import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";



export class ReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=processing_algorithm" })
  processingAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=report_number" })
  reportNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Result;
}

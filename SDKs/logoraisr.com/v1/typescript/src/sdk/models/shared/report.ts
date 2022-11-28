import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";



export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId: string;

  @SpeakeasyMetadata({ data: "json, name=process_id" })
  processId: number;

  @SpeakeasyMetadata({ data: "json, name=report_number" })
  reportNumber: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Result;

  @SpeakeasyMetadata({ data: "json, name=result_id" })
  resultId: number;
}

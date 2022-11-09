import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Result } from "./result";


export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=file_id" })
  fileId: string;

  @Metadata({ data: "json, name=process_id" })
  processId: number;

  @Metadata({ data: "json, name=report_number" })
  reportNumber: number;

  @Metadata({ data: "json, name=result" })
  result?: Result;

  @Metadata({ data: "json, name=result_id" })
  resultId: number;
}

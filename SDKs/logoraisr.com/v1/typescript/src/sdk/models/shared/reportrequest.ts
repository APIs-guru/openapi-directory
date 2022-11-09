import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_id" })
  fileId: string;

  @Metadata({ data: "json, name=process" })
  process: string;
}

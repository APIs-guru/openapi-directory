import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId: string;

  @SpeakeasyMetadata({ data: "json, name=process" })
  process: string;
}

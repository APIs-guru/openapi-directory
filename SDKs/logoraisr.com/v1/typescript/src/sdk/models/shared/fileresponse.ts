import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: string;
}

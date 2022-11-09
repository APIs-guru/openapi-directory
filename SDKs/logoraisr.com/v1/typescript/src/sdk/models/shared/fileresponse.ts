import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_id" })
  fileId?: string;
}

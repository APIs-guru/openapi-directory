import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UploadSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mimetype" })
  mimetype?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

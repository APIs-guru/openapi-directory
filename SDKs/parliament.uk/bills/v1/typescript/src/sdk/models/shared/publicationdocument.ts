import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublicationDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentLength" })
  contentLength?: number;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublicationLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

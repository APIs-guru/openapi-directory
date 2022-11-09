import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SyndicateMarshaller extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;
}

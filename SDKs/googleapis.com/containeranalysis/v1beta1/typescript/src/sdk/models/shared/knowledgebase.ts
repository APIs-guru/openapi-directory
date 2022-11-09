import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KnowledgeBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

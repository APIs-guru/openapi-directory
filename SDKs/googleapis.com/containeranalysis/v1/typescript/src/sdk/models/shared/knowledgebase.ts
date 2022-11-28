import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KnowledgeBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

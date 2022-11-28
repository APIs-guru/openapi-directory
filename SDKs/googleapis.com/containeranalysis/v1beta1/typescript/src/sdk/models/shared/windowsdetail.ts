import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KnowledgeBase } from "./knowledgebase";



export class WindowsDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fixingKbs", elemType: KnowledgeBase })
  fixingKbs?: KnowledgeBase[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

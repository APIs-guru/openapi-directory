import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KnowledgeBase } from "./knowledgebase";


export class WindowsDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fixingKbs", elemType: shared.KnowledgeBase })
  fixingKbs?: KnowledgeBase[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}

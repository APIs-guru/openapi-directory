import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForwardPaging } from "./forwardpaging";
import { ExtensionActionDefinition } from "./extensionactiondefinition";


export class CollectionResponseExtensionActionDefinitionForwardPaging extends SpeakeasyBase {
  @Metadata({ data: "json, name=paging" })
  paging?: ForwardPaging;

  @Metadata({ data: "json, name=results", elemType: shared.ExtensionActionDefinition })
  results: ExtensionActionDefinition[];
}

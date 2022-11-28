import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardPaging } from "./forwardpaging";
import { ExtensionActionDefinition } from "./extensionactiondefinition";



export class CollectionResponseExtensionActionDefinitionForwardPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: ForwardPaging;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ExtensionActionDefinition })
  results: ExtensionActionDefinition[];
}

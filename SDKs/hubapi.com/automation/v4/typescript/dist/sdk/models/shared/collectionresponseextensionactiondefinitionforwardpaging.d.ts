import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ForwardPaging } from "./forwardpaging";
import { ExtensionActionDefinition } from "./extensionactiondefinition";
export declare class CollectionResponseExtensionActionDefinitionForwardPaging extends SpeakeasyBase {
    paging?: ForwardPaging;
    results: ExtensionActionDefinition[];
}

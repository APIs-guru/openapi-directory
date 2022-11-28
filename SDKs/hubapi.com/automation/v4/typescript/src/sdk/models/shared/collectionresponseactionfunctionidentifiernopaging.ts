import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionFunctionIdentifier } from "./actionfunctionidentifier";



export class CollectionResponseActionFunctionIdentifierNoPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: ActionFunctionIdentifier })
  results: ActionFunctionIdentifier[];
}

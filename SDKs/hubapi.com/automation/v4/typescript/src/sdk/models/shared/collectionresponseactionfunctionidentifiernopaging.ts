import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionFunctionIdentifier } from "./actionfunctionidentifier";


export class CollectionResponseActionFunctionIdentifierNoPaging extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.ActionFunctionIdentifier })
  results: ActionFunctionIdentifier[];
}

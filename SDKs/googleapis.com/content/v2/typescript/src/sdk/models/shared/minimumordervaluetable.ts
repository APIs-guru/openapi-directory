import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MinimumOrderValueTableStoreCodeSetWithMov } from "./minimumordervaluetablestorecodesetwithmov";


export class MinimumOrderValueTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=storeCodeSetWithMovs", elemType: shared.MinimumOrderValueTableStoreCodeSetWithMov })
  storeCodeSetWithMovs?: MinimumOrderValueTableStoreCodeSetWithMov[];
}

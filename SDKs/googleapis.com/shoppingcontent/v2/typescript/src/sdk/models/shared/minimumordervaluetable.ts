import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MinimumOrderValueTableStoreCodeSetWithMov } from "./minimumordervaluetablestorecodesetwithmov";



export class MinimumOrderValueTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=storeCodeSetWithMovs", elemType: MinimumOrderValueTableStoreCodeSetWithMov })
  storeCodeSetWithMovs?: MinimumOrderValueTableStoreCodeSetWithMov[];
}

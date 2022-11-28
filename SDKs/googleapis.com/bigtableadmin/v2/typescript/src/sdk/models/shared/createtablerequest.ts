import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Split } from "./split";
import { TableInput } from "./table";



// CreateTableRequestInput
/** 
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable
**/
export class CreateTableRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialSplits", elemType: Split })
  initialSplits?: Split[];

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: TableInput;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventorySource } from "./inventorysource";



export class ListInventorySourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventorySources", elemType: InventorySource })
  inventorySources?: InventorySource[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

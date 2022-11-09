import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventorySource } from "./inventorysource";


export class ListInventorySourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventorySources", elemType: shared.InventorySource })
  inventorySources?: InventorySource[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

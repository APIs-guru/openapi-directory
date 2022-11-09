import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate
/** 
 * Update to the list of advertisers with read/write access to the inventory source.
**/
export class EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedAdvertisers" })
  addedAdvertisers?: string[];

  @Metadata({ data: "json, name=removedAdvertisers" })
  removedAdvertisers?: string[];
}

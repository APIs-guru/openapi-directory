import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate
/** 
 * Update to the list of advertisers with read/write access to the inventory source.
**/
export class EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedAdvertisers" })
  addedAdvertisers?: string[];

  @SpeakeasyMetadata({ data: "json, name=removedAdvertisers" })
  removedAdvertisers?: string[];
}

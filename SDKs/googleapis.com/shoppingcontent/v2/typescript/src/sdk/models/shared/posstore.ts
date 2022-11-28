import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PosStore
/** 
 * Store resource.
**/
export class PosStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcidCategory" })
  gcidCategory?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=storeAddress" })
  storeAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=storeName" })
  storeName?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}

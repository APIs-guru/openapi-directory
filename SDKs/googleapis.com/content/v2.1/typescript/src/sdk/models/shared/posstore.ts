import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PosStore
/** 
 * Store resource.
**/
export class PosStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcidCategory" })
  gcidCategory?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=storeAddress" })
  storeAddress?: string;

  @Metadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @Metadata({ data: "json, name=storeName" })
  storeName?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductSetPurgeConfig
/** 
 * Config to control which ProductSet contains the Products to be deleted.
**/
export class ProductSetPurgeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productSetId" })
  productSetId?: string;
}

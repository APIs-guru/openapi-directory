import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductSetPurgeConfig
/** 
 * Config to control which ProductSet contains the Products to be deleted.
**/
export class ProductSetPurgeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=productSetId" })
  productSetId?: string;
}

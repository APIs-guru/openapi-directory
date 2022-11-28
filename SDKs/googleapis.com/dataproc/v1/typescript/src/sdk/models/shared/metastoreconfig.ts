import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetastoreConfig
/** 
 * Specifies a Metastore configuration.
**/
export class MetastoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataprocMetastoreService" })
  dataprocMetastoreService?: string;
}

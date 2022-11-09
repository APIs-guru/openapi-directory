import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetastoreConfig
/** 
 * Specifies a Metastore configuration.
**/
export class MetastoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataprocMetastoreService" })
  dataprocMetastoreService?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticConfig
/** 
 * The configuration for elastic access
**/
export class ElasticConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterUri" })
  clusterUri: string;

  @Metadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @Metadata({ data: "json, name=index" })
  index: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=user" })
  user: string;
}

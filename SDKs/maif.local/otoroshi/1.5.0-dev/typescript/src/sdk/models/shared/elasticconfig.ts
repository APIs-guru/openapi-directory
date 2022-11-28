import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticConfig
/** 
 * The configuration for elastic access
**/
export class ElasticConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterUri" })
  clusterUri: string;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}

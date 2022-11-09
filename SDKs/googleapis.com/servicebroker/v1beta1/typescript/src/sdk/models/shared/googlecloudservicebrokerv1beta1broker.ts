import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudServicebrokerV1beta1Broker
/** 
 * Broker represents a consumable collection of Service Registry catalogs
 * exposed as an OSB Broker.
**/
export class GoogleCloudServicebrokerV1beta1Broker extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

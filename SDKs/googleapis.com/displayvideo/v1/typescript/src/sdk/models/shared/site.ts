import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Site
/** 
 * A single site. Sites are apps or websites belonging to a channel.
**/
export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=urlOrAppId" })
  urlOrAppId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Session
/** 
 * A session in the Cloud Spanner API.
**/
export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=approximateLastUseTime" })
  approximateLastUseTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

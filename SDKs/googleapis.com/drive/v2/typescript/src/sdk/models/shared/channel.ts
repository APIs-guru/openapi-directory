import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Channel
/** 
 * An notification channel used to watch for resource changes.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, string>;

  @Metadata({ data: "json, name=payload" })
  payload?: boolean;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

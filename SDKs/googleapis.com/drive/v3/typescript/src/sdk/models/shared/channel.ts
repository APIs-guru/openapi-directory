import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Channel
/** 
 * An notification channel used to watch for resource changes.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

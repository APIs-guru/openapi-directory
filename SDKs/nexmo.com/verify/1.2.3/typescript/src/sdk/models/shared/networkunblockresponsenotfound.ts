import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkUnblockResponseNotFound
/** 
 * Not Found
**/
export class NetworkUnblockResponseNotFound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

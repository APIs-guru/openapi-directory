import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";



// HmacKeysMetadata
/** 
 * A list of hmacKeys.
**/
export class HmacKeysMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: HmacKeyMetadata })
  items?: HmacKeyMetadata[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

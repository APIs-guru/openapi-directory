import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HmacKeyMetadata } from "./hmackeymetadata";


// HmacKeysMetadata
/** 
 * A list of hmacKeys.
**/
export class HmacKeysMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.HmacKeyMetadata })
  items?: HmacKeyMetadata[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

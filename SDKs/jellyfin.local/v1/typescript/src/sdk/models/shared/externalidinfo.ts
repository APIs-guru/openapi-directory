import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternalIdMediaTypeEnum } from "./externalidmediatypeenum";


// ExternalIdInfo
/** 
 * Represents the external id information for serialization to the client.
**/
export class ExternalIdInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ExternalIdMediaTypeEnum;

  @Metadata({ data: "json, name=UrlFormatString" })
  urlFormatString?: string;
}

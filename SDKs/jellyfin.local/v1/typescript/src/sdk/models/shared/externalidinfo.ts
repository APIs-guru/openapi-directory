import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalIdMediaTypeEnum } from "./externalidmediatypeenum";



// ExternalIdInfo
/** 
 * Represents the external id information for serialization to the client.
**/
export class ExternalIdInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ExternalIdMediaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UrlFormatString" })
  urlFormatString?: string;
}

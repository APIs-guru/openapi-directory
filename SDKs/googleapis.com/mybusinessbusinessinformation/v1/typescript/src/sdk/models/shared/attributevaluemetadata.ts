import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValueMetadata
/** 
 * Metadata for supported attribute values.
**/
export class AttributeValueMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}

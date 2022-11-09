import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeValueMetadata
/** 
 * Metadata for supported attribute values.
**/
export class AttributeValueMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}

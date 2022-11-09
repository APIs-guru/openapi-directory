import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// ImClient
/** 
 * A person's instant messaging client.
**/
export class ImClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedProtocol" })
  formattedProtocol?: string;

  @Metadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}

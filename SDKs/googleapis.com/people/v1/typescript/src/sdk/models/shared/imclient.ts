import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";



// ImClientInput
/** 
 * A person's instant messaging client.
**/
export class ImClientInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// ImClient
/** 
 * A person's instant messaging client.
**/
export class ImClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedProtocol" })
  formattedProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

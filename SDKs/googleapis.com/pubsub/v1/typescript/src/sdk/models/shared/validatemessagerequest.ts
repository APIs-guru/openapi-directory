import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaInput } from "./schema";


export enum ValidateMessageRequestEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    Json = "JSON",
    Binary = "BINARY"
}


// ValidateMessageRequestInput
/** 
 * Request for the `ValidateMessage` method.
**/
export class ValidateMessageRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: ValidateMessageRequestEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: SchemaInput;
}

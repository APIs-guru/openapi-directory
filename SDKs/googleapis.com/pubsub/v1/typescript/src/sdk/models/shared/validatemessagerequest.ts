import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Schema } from "./schema";

export enum ValidateMessageRequestEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED"
,    Json = "JSON"
,    Binary = "BINARY"
}


// ValidateMessageRequest
/** 
 * Request for the `ValidateMessage` method.
**/
export class ValidateMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=encoding" })
  encoding?: ValidateMessageRequestEncodingEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: Schema;
}

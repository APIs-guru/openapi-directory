import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorInvalidJson
/** 
 * Invalid JSON
**/
export class ErrorInvalidJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}

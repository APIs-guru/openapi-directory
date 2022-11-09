import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorUnprovisioned
/** 
 * Unprovisioned
**/
export class ErrorUnprovisioned extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=instance" })
  instance: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}

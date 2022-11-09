import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BadResponse
/** 
 * An HTTP response that is not supposed to be returned by a service
**/
export class BadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @Metadata({ data: "json, name=status" })
  status: number;
}

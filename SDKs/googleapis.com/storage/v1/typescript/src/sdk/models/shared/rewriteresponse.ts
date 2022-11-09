import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Object } from "./object";


// RewriteResponse
/** 
 * A rewrite response.
**/
export class RewriteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=done" })
  done?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=objectSize" })
  objectSize?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: Object;

  @Metadata({ data: "json, name=rewriteToken" })
  rewriteToken?: string;

  @Metadata({ data: "json, name=totalBytesRewritten" })
  totalBytesRewritten?: string;
}

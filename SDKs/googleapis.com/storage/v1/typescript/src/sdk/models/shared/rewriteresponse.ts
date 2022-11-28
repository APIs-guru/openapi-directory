import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Object } from "./object";



// RewriteResponse
/** 
 * A rewrite response.
**/
export class RewriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=objectSize" })
  objectSize?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Object;

  @SpeakeasyMetadata({ data: "json, name=rewriteToken" })
  rewriteToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalBytesRewritten" })
  totalBytesRewritten?: string;
}

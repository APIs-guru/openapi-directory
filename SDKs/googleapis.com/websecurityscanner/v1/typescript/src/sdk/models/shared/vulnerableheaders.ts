import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Header } from "./header";
import { Header } from "./header";


// VulnerableHeaders
/** 
 * Information about vulnerable or missing HTTP Headers.
**/
export class VulnerableHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers", elemType: shared.Header })
  headers?: Header[];

  @Metadata({ data: "json, name=missingHeaders", elemType: shared.Header })
  missingHeaders?: Header[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";



// VulnerableHeaders
/** 
 * Information about vulnerable or missing HTTP Headers.
**/
export class VulnerableHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Header })
  headers?: Header[];

  @SpeakeasyMetadata({ data: "json, name=missingHeaders", elemType: Header })
  missingHeaders?: Header[];
}

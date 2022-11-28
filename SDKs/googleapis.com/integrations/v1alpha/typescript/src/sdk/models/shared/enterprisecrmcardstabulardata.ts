import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsRow } from "./enterprisecrmcardsrow";



// EnterpriseCrmCardsTabularData
/** 
 * The generic data format returned from all connectors.
**/
export class EnterpriseCrmCardsTabularData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: string[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: EnterpriseCrmCardsRow })
  rows?: EnterpriseCrmCardsRow[];
}

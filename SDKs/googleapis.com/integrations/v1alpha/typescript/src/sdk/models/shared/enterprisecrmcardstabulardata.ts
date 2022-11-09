import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmCardsRow } from "./enterprisecrmcardsrow";


// EnterpriseCrmCardsTabularData
/** 
 * The generic data format returned from all connectors.
**/
export class EnterpriseCrmCardsTabularData extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: string[];

  @Metadata({ data: "json, name=rows", elemType: shared.EnterpriseCrmCardsRow })
  rows?: EnterpriseCrmCardsRow[];
}

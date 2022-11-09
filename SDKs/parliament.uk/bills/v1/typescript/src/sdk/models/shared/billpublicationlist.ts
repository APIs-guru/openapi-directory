import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillPublication } from "./billpublication";


export class BillPublicationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=billId" })
  billId?: number;

  @Metadata({ data: "json, name=publications", elemType: shared.BillPublication })
  publications?: BillPublication[];
}

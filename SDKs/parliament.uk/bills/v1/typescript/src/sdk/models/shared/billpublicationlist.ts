import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillPublication } from "./billpublication";



export class BillPublicationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billId" })
  billId?: number;

  @SpeakeasyMetadata({ data: "json, name=publications", elemType: BillPublication })
  publications?: BillPublication[];
}

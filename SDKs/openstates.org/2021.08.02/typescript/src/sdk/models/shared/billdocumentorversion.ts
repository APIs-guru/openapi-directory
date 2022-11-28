import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillDocumentLink } from "./billdocumentlink";



export class BillDocumentOrVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: BillDocumentLink })
  links: BillDocumentLink[];

  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;
}

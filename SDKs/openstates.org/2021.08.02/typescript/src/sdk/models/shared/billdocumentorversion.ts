import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillDocumentLink } from "./billdocumentlink";


export class BillDocumentOrVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: string;

  @Metadata({ data: "json, name=links", elemType: shared.BillDocumentLink })
  links: BillDocumentLink[];

  @Metadata({ data: "json, name=note" })
  note: string;
}

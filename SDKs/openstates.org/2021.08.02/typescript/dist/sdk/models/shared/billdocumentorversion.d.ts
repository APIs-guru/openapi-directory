import { SpeakeasyBase } from "../../../internal/utils";
import { BillDocumentLink } from "./billdocumentlink";
export declare class BillDocumentOrVersion extends SpeakeasyBase {
    date: string;
    links: BillDocumentLink[];
    note: string;
}

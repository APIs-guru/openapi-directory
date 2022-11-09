import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntryContent } from "./entrycontent";
import { EntryLink } from "./entrylink";
import { KeyMaterial } from "./keymaterial";


export class DataNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries" })
  entries: any[];

  @Metadata({ data: "json, name=keyMaterial" })
  keyMaterial: KeyMaterial;

  @Metadata({ data: "json, name=pageCount" })
  pageCount: number;

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}

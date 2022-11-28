import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryContent } from "./entrycontent";
import { EntryLink } from "./entrylink";
import { KeyMaterial } from "./keymaterial";



export class DataNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries" })
  entries: any[];

  @SpeakeasyMetadata({ data: "json, name=keyMaterial" })
  keyMaterial: KeyMaterial;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount: number;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}

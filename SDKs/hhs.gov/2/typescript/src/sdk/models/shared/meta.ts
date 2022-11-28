import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { Pagination } from "./pagination";



export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

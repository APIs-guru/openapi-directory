import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";
import { Pagination } from "./pagination";


export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

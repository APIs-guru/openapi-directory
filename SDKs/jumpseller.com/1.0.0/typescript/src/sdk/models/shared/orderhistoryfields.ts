import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderHistoryFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

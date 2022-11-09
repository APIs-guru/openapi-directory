import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersData extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=paid" })
  paid?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}

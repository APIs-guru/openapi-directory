import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=paid" })
  paid?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}

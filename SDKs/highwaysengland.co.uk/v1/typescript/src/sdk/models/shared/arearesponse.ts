import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Area } from "./area";



export class AreaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=areas", elemType: Area })
  areas?: Area[];

  @SpeakeasyMetadata({ data: "json, name=row_count" })
  rowCount?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Area } from "./area";


export class AreaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=areas", elemType: shared.Area })
  areas?: Area[];

  @Metadata({ data: "json, name=row_count" })
  rowCount?: number;
}

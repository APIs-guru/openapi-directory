import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SiteType } from "./sitetype";


export class SiteTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=row_count" })
  rowCount?: number;

  @Metadata({ data: "json, name=sitetypes", elemType: shared.SiteType })
  sitetypes?: SiteType[];
}

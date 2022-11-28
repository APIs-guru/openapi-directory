import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteType } from "./sitetype";



export class SiteTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=row_count" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sitetypes", elemType: SiteType })
  sitetypes?: SiteType[];
}

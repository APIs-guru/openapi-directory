import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteResult } from "./siteresult";



export class SiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=row_count" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: SiteResult })
  sites?: SiteResult[];
}

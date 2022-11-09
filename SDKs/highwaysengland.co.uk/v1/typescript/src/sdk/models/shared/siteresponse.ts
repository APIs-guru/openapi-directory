import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SiteResult } from "./siteresult";


export class SiteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=row_count" })
  rowCount?: number;

  @Metadata({ data: "json, name=sites", elemType: shared.SiteResult })
  sites?: SiteResult[];
}

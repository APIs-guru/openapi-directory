import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Metrics } from "./metrics";
import { ProductView } from "./productview";
import { Segments } from "./segments";


// ReportRow
/** 
 * Result row returned from the search query.
**/
export class ReportRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics" })
  metrics?: Metrics;

  @Metadata({ data: "json, name=productView" })
  productView?: ProductView;

  @Metadata({ data: "json, name=segments" })
  segments?: Segments;
}

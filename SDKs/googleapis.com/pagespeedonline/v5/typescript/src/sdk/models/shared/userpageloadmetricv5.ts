import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bucket } from "./bucket";


// UserPageLoadMetricV5
/** 
 * A CrUX metric object for a single metric and form factor.
**/
export class UserPageLoadMetricV5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=distributions", elemType: shared.Bucket })
  distributions?: Bucket[];

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: string;

  @Metadata({ data: "json, name=median" })
  median?: number;

  @Metadata({ data: "json, name=metricId" })
  metricId?: string;

  @Metadata({ data: "json, name=percentile" })
  percentile?: number;
}

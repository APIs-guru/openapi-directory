import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataPoint } from "./datapoint";


// Dataset
/** 
 * A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
**/
export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=maxEndTimeNs" })
  maxEndTimeNs?: string;

  @Metadata({ data: "json, name=minStartTimeNs" })
  minStartTimeNs?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=point", elemType: shared.DataPoint })
  point?: DataPoint[];
}

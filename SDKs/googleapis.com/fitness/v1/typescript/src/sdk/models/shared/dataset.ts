import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";



// Dataset
/** 
 * A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
**/
export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxEndTimeNs" })
  maxEndTimeNs?: string;

  @SpeakeasyMetadata({ data: "json, name=minStartTimeNs" })
  minStartTimeNs?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=point", elemType: DataPoint })
  point?: DataPoint[];
}

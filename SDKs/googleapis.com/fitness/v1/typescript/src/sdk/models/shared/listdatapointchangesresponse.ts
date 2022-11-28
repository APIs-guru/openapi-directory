import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";



export class ListDataPointChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deletedDataPoint", elemType: DataPoint })
  deletedDataPoint?: DataPoint[];

  @SpeakeasyMetadata({ data: "json, name=insertedDataPoint", elemType: DataPoint })
  insertedDataPoint?: DataPoint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

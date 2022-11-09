import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataPoint } from "./datapoint";
import { DataPoint } from "./datapoint";


export class ListDataPointChangesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=deletedDataPoint", elemType: shared.DataPoint })
  deletedDataPoint?: DataPoint[];

  @Metadata({ data: "json, name=insertedDataPoint", elemType: shared.DataPoint })
  insertedDataPoint?: DataPoint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

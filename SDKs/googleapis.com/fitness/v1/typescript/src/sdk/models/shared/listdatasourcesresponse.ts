import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



export class ListDataSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSource", elemType: DataSource })
  dataSource?: DataSource[];
}

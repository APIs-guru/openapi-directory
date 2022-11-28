import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceObjectReference } from "./datasourceobjectreference";



// DataSourceObjectReferences
/** 
 * A list of references to data source objects.
**/
export class DataSourceObjectReferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=references", elemType: DataSourceObjectReference })
  references?: DataSourceObjectReference[];
}

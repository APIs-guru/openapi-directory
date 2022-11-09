import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceObjectReference } from "./datasourceobjectreference";


// DataSourceObjectReferences
/** 
 * A list of references to data source objects.
**/
export class DataSourceObjectReferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=references", elemType: shared.DataSourceObjectReference })
  references?: DataSourceObjectReference[];
}

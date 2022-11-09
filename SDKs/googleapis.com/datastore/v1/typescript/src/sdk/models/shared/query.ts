import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyReference } from "./propertyreference";
import { Filter } from "./filter";
import { KindExpression } from "./kindexpression";
import { PropertyOrder } from "./propertyorder";
import { Projection } from "./projection";


// Query
/** 
 * A query for entities.
**/
export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=distinctOn", elemType: shared.PropertyReference })
  distinctOn?: PropertyReference[];

  @Metadata({ data: "json, name=endCursor" })
  endCursor?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: Filter;

  @Metadata({ data: "json, name=kind", elemType: shared.KindExpression })
  kind?: KindExpression[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=order", elemType: shared.PropertyOrder })
  order?: PropertyOrder[];

  @Metadata({ data: "json, name=projection", elemType: shared.Projection })
  projection?: Projection[];

  @Metadata({ data: "json, name=startCursor" })
  startCursor?: string;
}

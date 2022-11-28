import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=distinctOn", elemType: PropertyReference })
  distinctOn?: PropertyReference[];

  @SpeakeasyMetadata({ data: "json, name=endCursor" })
  endCursor?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: Filter;

  @SpeakeasyMetadata({ data: "json, name=kind", elemType: KindExpression })
  kind?: KindExpression[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=order", elemType: PropertyOrder })
  order?: PropertyOrder[];

  @SpeakeasyMetadata({ data: "json, name=projection", elemType: Projection })
  projection?: Projection[];

  @SpeakeasyMetadata({ data: "json, name=startCursor" })
  startCursor?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";
import { Filter } from "./filter";
import { KindExpression } from "./kindexpression";
import { PropertyOrder } from "./propertyorder";
import { Projection } from "./projection";
/**
 * A query for entities.
**/
export declare class Query extends SpeakeasyBase {
    distinctOn?: PropertyReference[];
    endCursor?: string;
    filter?: Filter;
    kind?: KindExpression[];
    limit?: number;
    offset?: number;
    order?: PropertyOrder[];
    projection?: Projection[];
    startCursor?: string;
}

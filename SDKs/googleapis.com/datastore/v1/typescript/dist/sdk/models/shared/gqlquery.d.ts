import { SpeakeasyBase } from "../../../internal/utils";
import { GqlQueryParameter } from "./gqlqueryparameter";
/**
 * A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
**/
export declare class GqlQuery extends SpeakeasyBase {
    allowLiterals?: boolean;
    namedBindings?: Map<string, GqlQueryParameter>;
    positionalBindings?: GqlQueryParameter[];
    queryString?: string;
}

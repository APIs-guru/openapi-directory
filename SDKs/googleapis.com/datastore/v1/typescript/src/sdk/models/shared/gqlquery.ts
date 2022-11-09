import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GqlQueryParameter } from "./gqlqueryparameter";
import { GqlQueryParameter } from "./gqlqueryparameter";


// GqlQuery
/** 
 * A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
**/
export class GqlQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowLiterals" })
  allowLiterals?: boolean;

  @Metadata({ data: "json, name=namedBindings", elemType: shared.GqlQueryParameter })
  namedBindings?: Map<string, GqlQueryParameter>;

  @Metadata({ data: "json, name=positionalBindings", elemType: shared.GqlQueryParameter })
  positionalBindings?: GqlQueryParameter[];

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;
}

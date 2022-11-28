import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GqlQueryParameter } from "./gqlqueryparameter";



// GqlQuery
/** 
 * A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
**/
export class GqlQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowLiterals" })
  allowLiterals?: boolean;

  @SpeakeasyMetadata({ data: "json, name=namedBindings", elemType: GqlQueryParameter })
  namedBindings?: Map<string, GqlQueryParameter>;

  @SpeakeasyMetadata({ data: "json, name=positionalBindings", elemType: GqlQueryParameter })
  positionalBindings?: GqlQueryParameter[];

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;
}

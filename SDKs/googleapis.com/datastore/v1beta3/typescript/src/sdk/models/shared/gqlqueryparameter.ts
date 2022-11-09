import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Value } from "./value";


// GqlQueryParameter
/** 
 * A binding parameter for a GQL query.
**/
export class GqlQueryParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=value" })
  value?: Value;
}

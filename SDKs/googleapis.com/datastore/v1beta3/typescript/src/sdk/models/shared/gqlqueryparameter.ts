import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// GqlQueryParameter
/** 
 * A binding parameter for a GQL query.
**/
export class GqlQueryParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Value;
}

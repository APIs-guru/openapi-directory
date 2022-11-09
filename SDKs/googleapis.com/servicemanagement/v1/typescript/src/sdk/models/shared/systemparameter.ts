import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SystemParameter
/** 
 * Define a parameter's name and location. The parameter may be passed as either an HTTP header or a URL query parameter, and if both are passed the behavior is implementation-dependent.
**/
export class SystemParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpHeader" })
  httpHeader?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=urlQueryParameter" })
  urlQueryParameter?: string;
}

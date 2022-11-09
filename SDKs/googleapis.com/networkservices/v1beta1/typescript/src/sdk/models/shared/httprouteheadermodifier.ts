import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRouteHeaderModifier
/** 
 * The specification for modifying HTTP header in HTTP request and HTTP response.
**/
export class HttpRouteHeaderModifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: Map<string, string>;

  @Metadata({ data: "json, name=remove" })
  remove?: string[];

  @Metadata({ data: "json, name=set" })
  set?: Map<string, string>;
}

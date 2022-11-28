import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRouteHeaderModifier
/** 
 * The specification for modifying HTTP header in HTTP request and HTTP response.
**/
export class HttpRouteHeaderModifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=remove" })
  remove?: string[];

  @SpeakeasyMetadata({ data: "json, name=set" })
  set?: Map<string, string>;
}

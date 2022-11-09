import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IPv6Range
/** 
 * An object representing an IPv6 range.
 * 
**/
export class IPv6Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefix" })
  prefix?: number;

  @Metadata({ data: "json, name=range" })
  range?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=route_target" })
  routeTarget?: string;
}

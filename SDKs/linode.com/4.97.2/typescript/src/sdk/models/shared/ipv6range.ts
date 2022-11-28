import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IPv6Range
/** 
 * An object representing an IPv6 range.
 * 
**/
export class IPv6Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: number;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=route_target" })
  routeTarget?: string;
}

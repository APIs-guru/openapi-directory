import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsRouteRouteRule } from "./tlsrouterouterule";



// TlsRoute
/** 
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
export class TlsRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gateways" })
  gateways?: string[];

  @SpeakeasyMetadata({ data: "json, name=meshes" })
  meshes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: TlsRouteRouteRule })
  rules?: TlsRouteRouteRule[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// TlsRouteInput
/** 
 * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
**/
export class TlsRouteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gateways" })
  gateways?: string[];

  @SpeakeasyMetadata({ data: "json, name=meshes" })
  meshes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: TlsRouteRouteRule })
  rules?: TlsRouteRouteRule[];
}

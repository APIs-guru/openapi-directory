import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TileJson
/** 
 * TileJSON model.
 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
**/
export class TileJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=bounds" })
  bounds?: number[];

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=grids" })
  grids?: string[];

  @SpeakeasyMetadata({ data: "json, name=legend" })
  legend?: string;

  @SpeakeasyMetadata({ data: "json, name=maxzoom" })
  maxzoom?: number;

  @SpeakeasyMetadata({ data: "json, name=minzoom" })
  minzoom?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=tilejson" })
  tilejson?: string;

  @SpeakeasyMetadata({ data: "json, name=tiles" })
  tiles: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

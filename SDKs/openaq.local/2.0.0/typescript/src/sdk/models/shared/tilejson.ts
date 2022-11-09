import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TileJson
/** 
 * TileJSON model.
 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
**/
export class TileJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=bounds" })
  bounds?: number[];

  @Metadata({ data: "json, name=data" })
  data?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=grids" })
  grids?: string[];

  @Metadata({ data: "json, name=legend" })
  legend?: string;

  @Metadata({ data: "json, name=maxzoom" })
  maxzoom?: number;

  @Metadata({ data: "json, name=minzoom" })
  minzoom?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=tilejson" })
  tilejson?: string;

  @Metadata({ data: "json, name=tiles" })
  tiles: string[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}

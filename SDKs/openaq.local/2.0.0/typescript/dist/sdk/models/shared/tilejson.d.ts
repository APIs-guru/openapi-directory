import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * TileJSON model.
 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
**/
export declare class TileJson extends SpeakeasyBase {
    attribution?: string;
    bounds?: number[];
    data?: string[];
    description?: string;
    grids?: string[];
    legend?: string;
    maxzoom?: number;
    minzoom?: number;
    name?: string;
    scheme?: string;
    template?: string;
    tilejson?: string;
    tiles: string[];
    version?: string;
}

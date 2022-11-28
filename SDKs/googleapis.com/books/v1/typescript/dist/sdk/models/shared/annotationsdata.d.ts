import { SpeakeasyBase } from "../../../internal/utils";
import { GeoAnnotationdata } from "./geoannotationdata";
export declare class Annotationsdata extends SpeakeasyBase {
    items?: GeoAnnotationdata[];
    kind?: string;
    nextPageToken?: string;
    totalItems?: number;
}

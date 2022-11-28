import { SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";
export declare class Annotations extends SpeakeasyBase {
    items?: Annotation[];
    kind?: string;
    nextPageToken?: string;
    totalItems?: number;
}

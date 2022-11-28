import { SpeakeasyBase } from "../../../internal/utils";
import { Fingerprint } from "./fingerprint";
import { Layer } from "./layer";
/**
 * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
**/
export declare class ImageOccurrence extends SpeakeasyBase {
    baseResourceUrl?: string;
    distance?: number;
    fingerprint?: Fingerprint;
    layerInfo?: Layer[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Fingerprint } from "./fingerprint";
import { Layer } from "./layer";
/**
 * Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
**/
export declare class Derived extends SpeakeasyBase {
    baseResourceUrl?: string;
    distance?: number;
    fingerprint?: Fingerprint;
    layerInfo?: Layer[];
}

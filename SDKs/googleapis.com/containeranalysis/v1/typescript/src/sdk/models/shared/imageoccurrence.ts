import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fingerprint } from "./fingerprint";
import { Layer } from "./layer";



// ImageOccurrence
/** 
 * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
**/
export class ImageOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseResourceUrl" })
  baseResourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: Fingerprint;

  @SpeakeasyMetadata({ data: "json, name=layerInfo", elemType: Layer })
  layerInfo?: Layer[];
}

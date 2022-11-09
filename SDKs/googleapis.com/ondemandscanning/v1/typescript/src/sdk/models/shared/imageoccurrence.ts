import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Fingerprint } from "./fingerprint";
import { Layer } from "./layer";


// ImageOccurrence
/** 
 * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
**/
export class ImageOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseResourceUrl" })
  baseResourceUrl?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: Fingerprint;

  @Metadata({ data: "json, name=layerInfo", elemType: shared.Layer })
  layerInfo?: Layer[];
}

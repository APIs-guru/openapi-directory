import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Detections extends SpeakeasyBase {
  @SpeakeasyMetadata()
  confidence?: number;

  @SpeakeasyMetadata()
  language?: string;
}

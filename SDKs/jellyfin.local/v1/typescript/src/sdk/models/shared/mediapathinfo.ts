import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MediaPathInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NetworkPath" })
  networkPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}

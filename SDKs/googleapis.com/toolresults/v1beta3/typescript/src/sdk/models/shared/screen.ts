import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Screen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileReference" })
  fileReference?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

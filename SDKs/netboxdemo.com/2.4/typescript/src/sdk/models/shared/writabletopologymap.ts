import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableTopologyMapInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device_patterns" })
  devicePatterns: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

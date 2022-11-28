import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritablePlatformInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_args" })
  napalmArgs?: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_driver" })
  napalmDriver?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

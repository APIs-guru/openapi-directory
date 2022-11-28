import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedRack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

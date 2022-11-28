import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedPowerPanel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

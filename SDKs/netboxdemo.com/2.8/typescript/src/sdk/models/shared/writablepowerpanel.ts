import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritablePowerPanelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rack_group" })
  rackGroup?: number;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: number;
}

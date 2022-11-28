import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritablePowerOutletTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

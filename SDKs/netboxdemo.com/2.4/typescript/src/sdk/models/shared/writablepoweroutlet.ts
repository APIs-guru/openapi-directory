import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritablePowerOutletInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}

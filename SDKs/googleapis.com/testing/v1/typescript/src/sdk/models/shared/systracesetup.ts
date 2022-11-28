import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SystraceSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;
}

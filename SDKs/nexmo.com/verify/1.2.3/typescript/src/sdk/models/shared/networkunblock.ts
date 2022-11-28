import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NetworkUnblock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=unblock_duration" })
  unblockDuration?: number;
}

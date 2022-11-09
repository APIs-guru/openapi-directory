import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NetworkUnblock extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=unblock_duration" })
  unblockDuration?: number;
}

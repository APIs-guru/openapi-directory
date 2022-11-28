import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableVirtualChassisInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=master" })
  master: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}

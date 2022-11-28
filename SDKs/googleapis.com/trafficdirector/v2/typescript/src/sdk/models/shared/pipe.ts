import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Pipe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableGraphInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: number;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}

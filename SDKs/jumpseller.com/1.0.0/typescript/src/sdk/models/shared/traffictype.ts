import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrafficType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

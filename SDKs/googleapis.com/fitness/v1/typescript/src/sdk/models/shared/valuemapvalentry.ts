import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MapValue } from "./mapvalue";



export class ValueMapValEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: MapValue;
}

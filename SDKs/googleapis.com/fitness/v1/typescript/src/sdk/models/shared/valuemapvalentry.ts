import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MapValue } from "./mapvalue";


export class ValueMapValEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: MapValue;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



export class ValueFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Value;
}

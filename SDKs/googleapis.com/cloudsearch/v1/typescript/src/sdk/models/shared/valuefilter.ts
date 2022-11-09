import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Value } from "./value";


export class ValueFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=value" })
  value?: Value;
}

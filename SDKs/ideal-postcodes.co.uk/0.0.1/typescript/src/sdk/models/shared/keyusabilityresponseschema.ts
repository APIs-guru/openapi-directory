import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyUsabilityResult } from "./keyusabilityresult";


export class KeyUsabilityResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: KeyUsabilityResult;
}

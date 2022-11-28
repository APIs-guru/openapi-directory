import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyUsabilityResult } from "./keyusabilityresult";



export class KeyUsabilityResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: KeyUsabilityResult;
}

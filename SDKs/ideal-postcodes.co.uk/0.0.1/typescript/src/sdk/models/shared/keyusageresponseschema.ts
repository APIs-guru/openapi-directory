import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyUsageResult } from "./keyusageresult";


export class KeyUsageResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: KeyUsageResult;
}

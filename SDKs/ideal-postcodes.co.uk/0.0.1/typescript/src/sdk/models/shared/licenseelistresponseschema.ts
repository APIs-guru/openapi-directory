import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseeListResult } from "./licenseelistresult";


export class LicenseeListResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: LicenseeListResult;
}

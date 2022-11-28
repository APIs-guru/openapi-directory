import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseeListResult } from "./licenseelistresult";



export class LicenseeListResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: LicenseeListResult;
}

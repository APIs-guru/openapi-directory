import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Licensee } from "./licensee";



export class LicenseeResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Licensee;
}

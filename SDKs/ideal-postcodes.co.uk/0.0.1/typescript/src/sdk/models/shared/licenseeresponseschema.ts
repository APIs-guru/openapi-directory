import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Licensee } from "./licensee";


export class LicenseeResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: Licensee;
}

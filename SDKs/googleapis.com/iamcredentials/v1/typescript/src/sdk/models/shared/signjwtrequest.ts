import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignJwtRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegates" })
  delegates?: string[];

  @Metadata({ data: "json, name=payload" })
  payload?: string;
}

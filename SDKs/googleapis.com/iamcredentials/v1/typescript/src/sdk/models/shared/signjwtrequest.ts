import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignJwtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegates" })
  delegates?: string[];

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;
}

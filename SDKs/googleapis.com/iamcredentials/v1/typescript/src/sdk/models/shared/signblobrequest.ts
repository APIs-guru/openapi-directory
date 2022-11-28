import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignBlobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegates" })
  delegates?: string[];

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;
}

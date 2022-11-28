import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateIdTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: string;

  @SpeakeasyMetadata({ data: "json, name=delegates" })
  delegates?: string[];

  @SpeakeasyMetadata({ data: "json, name=includeEmail" })
  includeEmail?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateIdTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: string;

  @Metadata({ data: "json, name=delegates" })
  delegates?: string[];

  @Metadata({ data: "json, name=includeEmail" })
  includeEmail?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegates" })
  delegates?: string[];

  @Metadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegates" })
  delegates?: string[];

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string[];
}

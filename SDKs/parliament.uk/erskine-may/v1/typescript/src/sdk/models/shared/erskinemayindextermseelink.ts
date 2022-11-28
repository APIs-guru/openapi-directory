import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErskineMayIndexTermSeeLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexTermId" })
  indexTermId?: number;

  @SpeakeasyMetadata({ data: "json, name=seeType" })
  seeType?: string;

  @SpeakeasyMetadata({ data: "json, name=seeValue" })
  seeValue?: string;
}

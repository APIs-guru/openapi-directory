import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErskineMayIndexTermSeeLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexTermId" })
  indexTermId?: number;

  @Metadata({ data: "json, name=seeType" })
  seeType?: string;

  @Metadata({ data: "json, name=seeValue" })
  seeValue?: string;
}

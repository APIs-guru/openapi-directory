import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErskineMayIndexTermSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayAs" })
  displayAs?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=seeValue" })
  seeValue?: string;
}

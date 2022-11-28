import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErskineMayIndexTermSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayAs" })
  displayAs?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=seeValue" })
  seeValue?: string;
}

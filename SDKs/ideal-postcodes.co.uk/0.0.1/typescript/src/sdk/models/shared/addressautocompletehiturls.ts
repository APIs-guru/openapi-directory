import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddressAutocompleteHitUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=udprn" })
  udprn?: string;

  @Metadata({ data: "json, name=umprn" })
  umprn?: string;
}

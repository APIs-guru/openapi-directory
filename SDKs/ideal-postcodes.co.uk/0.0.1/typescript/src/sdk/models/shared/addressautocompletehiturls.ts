import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddressAutocompleteHitUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=udprn" })
  udprn?: string;

  @SpeakeasyMetadata({ data: "json, name=umprn" })
  umprn?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressAutocompleteHitUrls } from "./addressautocompletehiturls";



export class AddressAutocompleteHit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;

  @SpeakeasyMetadata({ data: "json, name=udprn" })
  udprn?: string;

  @SpeakeasyMetadata({ data: "json, name=umprn" })
  umprn?: string;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: AddressAutocompleteHitUrls;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressAutocompleteHitUrls } from "./addressautocompletehiturls";


export class AddressAutocompleteHit extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestion" })
  suggestion?: string;

  @Metadata({ data: "json, name=udprn" })
  udprn?: string;

  @Metadata({ data: "json, name=umprn" })
  umprn?: string;

  @Metadata({ data: "json, name=urls" })
  urls?: AddressAutocompleteHitUrls;
}

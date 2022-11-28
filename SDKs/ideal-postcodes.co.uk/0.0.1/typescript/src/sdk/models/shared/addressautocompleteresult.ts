import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressAutocompleteHit } from "./addressautocompletehit";



export class AddressAutocompleteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hits", elemType: AddressAutocompleteHit })
  hits?: AddressAutocompleteHit[];
}

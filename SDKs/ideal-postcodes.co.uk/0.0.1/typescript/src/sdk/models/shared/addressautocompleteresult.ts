import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddressAutocompleteHit } from "./addressautocompletehit";


export class AddressAutocompleteResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=hits", elemType: shared.AddressAutocompleteHit })
  hits?: AddressAutocompleteHit[];
}

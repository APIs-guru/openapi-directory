import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressAutocompleteResult } from "./addressautocompleteresult";



export class AddressAutocompleteResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: AddressAutocompleteResult;
}

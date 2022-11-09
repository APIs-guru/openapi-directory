import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressAutocompleteResult } from "./addressautocompleteresult";


export class AddressAutocompleteResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: AddressAutocompleteResult;
}

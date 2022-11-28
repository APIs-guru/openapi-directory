import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressSearchResult } from "./addresssearchresult";



export class AddressSearchResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: AddressSearchResult;
}

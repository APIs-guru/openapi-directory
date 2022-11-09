import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressSearchResult } from "./addresssearchresult";


export class AddressSearchResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: AddressSearchResult;
}

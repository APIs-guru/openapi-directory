import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypeInfo } from "./typeinfo";


export class TypeProvidersListTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=types", elemType: shared.TypeInfo })
  types?: TypeInfo[];
}

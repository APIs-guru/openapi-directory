import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypeInfo } from "./typeinfo";



export class TypeProvidersListTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: TypeInfo })
  types?: TypeInfo[];
}

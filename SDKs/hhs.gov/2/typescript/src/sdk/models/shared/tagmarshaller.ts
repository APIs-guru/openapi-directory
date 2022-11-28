import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagLanguageMarshaller } from "./taglanguagemarshaller";
import { TagTypeMarshaller } from "./tagtypemarshaller";



export class TagMarshaller extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: TagLanguageMarshaller;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TagTypeMarshaller;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagLanguageMarshaller } from "./taglanguagemarshaller";
import { TagTypeMarshaller } from "./tagtypemarshaller";


export class TagMarshaller extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=language" })
  language?: TagLanguageMarshaller;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: TagTypeMarshaller;
}

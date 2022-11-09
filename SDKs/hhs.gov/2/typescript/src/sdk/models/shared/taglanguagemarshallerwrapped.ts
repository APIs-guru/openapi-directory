import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Meta } from "./meta";
import { TagLanguageMarshaller } from "./taglanguagemarshaller";


export class TagLanguageMarshallerWrapped extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback" })
  callback?: string;

  @Metadata({ data: "json, name=meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=results", elemType: shared.TagLanguageMarshaller })
  results?: TagLanguageMarshaller[];
}

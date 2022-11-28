import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { TagLanguageMarshaller } from "./taglanguagemarshaller";



export class TagLanguageMarshallerWrapped extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: TagLanguageMarshaller })
  results?: TagLanguageMarshaller[];
}

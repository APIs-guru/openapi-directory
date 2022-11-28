import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { TagMarshaller } from "./tagmarshaller";



export class TagMarshallerWrapped extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: TagMarshaller })
  results?: TagMarshaller[];
}

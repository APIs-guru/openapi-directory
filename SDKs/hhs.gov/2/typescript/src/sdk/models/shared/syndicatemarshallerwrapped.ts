import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { SyndicateMarshaller } from "./syndicatemarshaller";



export class SyndicateMarshallerWrapped extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SyndicateMarshaller })
  results?: SyndicateMarshaller[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEpisodesInBatchForm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ids;" })
  ids: string;
}

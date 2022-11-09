import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEpisodesInBatchForm extends SpeakeasyBase {
  @Metadata({ data: "form, name=ids;" })
  ids: string;
}

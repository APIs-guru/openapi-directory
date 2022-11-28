import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConsentArtefactReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

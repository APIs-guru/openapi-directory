import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

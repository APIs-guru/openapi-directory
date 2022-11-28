import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EditGuaranteedOrderReadAccessorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readAccessInherited" })
  readAccessInherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readAdvertiserIds" })
  readAdvertiserIds?: string[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EditGuaranteedOrderReadAccessorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=readAccessInherited" })
  readAccessInherited?: boolean;

  @Metadata({ data: "json, name=readAdvertiserIds" })
  readAdvertiserIds?: string[];
}

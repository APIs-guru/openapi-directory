import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Office extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=voice" })
  voice?: string;
}

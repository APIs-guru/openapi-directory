import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=found" })
  found?: number;

  @Metadata({ data: "json, name=license" })
  license?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}

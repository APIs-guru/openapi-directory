import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Rir extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregate_count" })
  aggregateCount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_private" })
  isPrivate?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}

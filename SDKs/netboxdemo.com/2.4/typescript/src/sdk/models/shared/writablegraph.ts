import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableGraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=type" })
  type: number;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}

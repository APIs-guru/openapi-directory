import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GraphType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Graph extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=type" })
  type: GraphType;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}

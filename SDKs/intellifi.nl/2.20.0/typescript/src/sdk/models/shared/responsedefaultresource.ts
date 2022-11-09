import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResponseDefaultResourceResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ResponseDefaultResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: ResponseDefaultResourceResource;

  @Metadata({ data: "json, name=status" })
  status?: number;
}

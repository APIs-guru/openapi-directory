import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponseDefaultResourceResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ResponseDefaultResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: ResponseDefaultResourceResource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}

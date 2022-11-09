import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveWebAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=immediate" })
  immediate?: boolean;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}

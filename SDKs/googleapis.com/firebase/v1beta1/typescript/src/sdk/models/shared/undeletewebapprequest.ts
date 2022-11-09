import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UndeleteWebAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}

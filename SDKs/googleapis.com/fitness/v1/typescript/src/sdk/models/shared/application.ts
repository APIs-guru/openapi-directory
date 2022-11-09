import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailsUrl" })
  detailsUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}

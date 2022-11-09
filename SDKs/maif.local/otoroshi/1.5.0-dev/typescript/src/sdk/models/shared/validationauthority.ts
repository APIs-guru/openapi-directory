import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationAuthority
/** 
 * Settings to access a validation authority server
**/
export class ValidationAuthority extends SpeakeasyBase {
  @Metadata({ data: "json, name=alwaysValid" })
  alwaysValid: boolean;

  @Metadata({ data: "json, name=badTtl" })
  badTtl: number;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=goodTtl" })
  goodTtl: number;

  @Metadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=noCache" })
  noCache: boolean;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=timeout" })
  timeout: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}

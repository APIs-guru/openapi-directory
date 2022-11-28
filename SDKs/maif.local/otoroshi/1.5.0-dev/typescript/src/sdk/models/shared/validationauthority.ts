import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationAuthority
/** 
 * Settings to access a validation authority server
**/
export class ValidationAuthority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alwaysValid" })
  alwaysValid: boolean;

  @SpeakeasyMetadata({ data: "json, name=badTtl" })
  badTtl: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=goodTtl" })
  goodTtl: number;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=noCache" })
  noCache: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

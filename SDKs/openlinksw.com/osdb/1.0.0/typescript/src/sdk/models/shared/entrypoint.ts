import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryPointParameter } from "./entrypointparameter";


export enum EntryPointHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}


export class EntryPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_types" })
  contentTypes: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=encoding_types" })
  encodingTypes: string[];

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod: EntryPointHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: EntryPointParameter })
  parameters: EntryPointParameter[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=url_template" })
  urlTemplate: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntryPointParameter } from "./entrypointparameter";

export enum EntryPointHttpMethodEnum {
    Get = "GET"
,    Put = "PUT"
,    Post = "POST"
,    Delete = "DELETE"
}


export class EntryPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_types" })
  contentTypes: string[];

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=encoding_types" })
  encodingTypes: string[];

  @Metadata({ data: "json, name=http_method" })
  httpMethod: EntryPointHttpMethodEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.EntryPointParameter })
  parameters: EntryPointParameter[];

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=url_template" })
  urlTemplate: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EntryPointParameterTypeEnum {
    Query = "query"
,    Header = "header"
,    Uri = "uri"
,    Path = "path"
,    Body = "body"
}


export class EntryPointParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=display_name" })
  displayName: string;

  @Metadata({ data: "json, name=parameter_name" })
  parameterName: string;

  @Metadata({ data: "json, name=permitted_values" })
  permittedValues: string[];

  @Metadata({ data: "json, name=required" })
  required: number;

  @Metadata({ data: "json, name=type" })
  type: EntryPointParameterTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EntryPointParameterTypeEnum {
    Query = "query",
    Header = "header",
    Uri = "uri",
    Path = "path",
    Body = "body"
}


export class EntryPointParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=parameter_name" })
  parameterName: string;

  @SpeakeasyMetadata({ data: "json, name=permitted_values" })
  permittedValues: string[];

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EntryPointParameterTypeEnum;
}

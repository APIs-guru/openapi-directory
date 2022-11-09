import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigPropertyRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: Map<string, any>;

  @Metadata({ data: "json, name=helpText" })
  helpText?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: string[];

  @Metadata({ data: "json, name=secret" })
  secret?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigPropertyRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=helpText" })
  helpText?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

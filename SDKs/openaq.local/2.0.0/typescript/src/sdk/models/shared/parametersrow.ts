import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ParametersRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isCore" })
  isCore?: boolean;

  @Metadata({ data: "json, name=maxColorValue" })
  maxColorValue?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=preferredUnit" })
  preferredUnit: string;
}

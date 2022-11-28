import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ParametersRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isCore" })
  isCore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxColorValue" })
  maxColorValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=preferredUnit" })
  preferredUnit: string;
}

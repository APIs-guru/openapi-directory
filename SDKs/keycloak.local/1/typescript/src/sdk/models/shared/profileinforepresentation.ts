import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProfileInfoRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledFeatures" })
  disabledFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=experimentalFeatures" })
  experimentalFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=previewFeatures" })
  previewFeatures?: string[];
}

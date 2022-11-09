import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProfileInfoRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledFeatures" })
  disabledFeatures?: string[];

  @Metadata({ data: "json, name=experimentalFeatures" })
  experimentalFeatures?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=previewFeatures" })
  previewFeatures?: string[];
}

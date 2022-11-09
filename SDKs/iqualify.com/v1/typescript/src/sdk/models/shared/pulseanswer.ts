import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PulseMcqOption } from "./pulsemcqoption";
import { PulseSpatialOption } from "./pulsespatialoption";


export class PulseAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=multiChoiceAnswer", elemType: shared.PulseMcqOption })
  multiChoiceAnswer?: PulseMcqOption[];

  @Metadata({ data: "json, name=spatialAnswer", elemType: shared.PulseSpatialOption })
  spatialAnswer?: PulseSpatialOption[];

  @Metadata({ data: "json, name=textAnswer" })
  textAnswer?: string;
}

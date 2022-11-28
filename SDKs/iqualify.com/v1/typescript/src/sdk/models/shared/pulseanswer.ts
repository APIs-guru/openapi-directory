import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PulseMcqOption } from "./pulsemcqoption";
import { PulseSpatialOption } from "./pulsespatialoption";



export class PulseAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multiChoiceAnswer", elemType: PulseMcqOption })
  multiChoiceAnswer?: PulseMcqOption[];

  @SpeakeasyMetadata({ data: "json, name=spatialAnswer", elemType: PulseSpatialOption })
  spatialAnswer?: PulseSpatialOption[];

  @SpeakeasyMetadata({ data: "json, name=textAnswer" })
  textAnswer?: string;
}

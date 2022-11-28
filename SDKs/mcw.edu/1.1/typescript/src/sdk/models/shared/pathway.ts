import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PathwayObject } from "./pathwayobject";
import { Reference } from "./reference";



export class Pathway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  hasAlteredPath?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: PathwayObject })
  objectList?: PathwayObject[];

  @SpeakeasyMetadata()
  pathwayCategories?: string[];

  @SpeakeasyMetadata({ elemType: Reference })
  referenceList?: Reference[];
}

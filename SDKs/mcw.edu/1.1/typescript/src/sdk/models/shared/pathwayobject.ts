import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PathwayObject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accId?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  objDesc?: string;

  @SpeakeasyMetadata()
  objName?: string;

  @SpeakeasyMetadata()
  typeId?: number;

  @SpeakeasyMetadata()
  typeName?: string;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  xdbKey?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cryopreservedEmbryo?: boolean;

  @SpeakeasyMetadata()
  cryopreservedSperm?: boolean;

  @SpeakeasyMetadata()
  cryorecovery?: boolean;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  liveAnimals?: boolean;

  @SpeakeasyMetadata()
  statusDate?: Date;

  @SpeakeasyMetadata()
  strainRgdId?: number;
}
